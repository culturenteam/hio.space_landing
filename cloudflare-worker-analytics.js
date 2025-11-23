// Cloudflare Worker for Weekly Analytics Reports
// Deploy this as a separate Worker with a cron trigger

// To deploy:
// 1. Go to Cloudflare Dashboard → Workers & Pages
// 2. Create new Worker
// 3. Paste this code
// 4. Add cron trigger: "0 9 * * 1" (Every Monday at 9 AM)
// 5. Add environment variable: WEB3FORMS_KEY

export default {
  async scheduled(event, env, ctx) {
    try {
      // In production, you'd fetch from KV storage or database
      // For now, this is a template for the weekly email structure
      
      const summary = {
        week: new Date().toISOString().split('T')[0],
        variantA: {
          views: 0, // Fetch from storage
          clicks: 0,
          ctr: 0
        },
        variantB: {
          views: 0, // Fetch from storage
          clicks: 0,
          ctr: 0
        }
      };

      // Calculate CTR
      summary.variantA.ctr = summary.variantA.views > 0 
        ? (summary.variantA.clicks / summary.variantA.views * 100).toFixed(2)
        : 0;
      
      summary.variantB.ctr = summary.variantB.views > 0 
        ? (summary.variantB.clicks / summary.variantB.views * 100).toFixed(2)
        : 0;

      // Determine winner
      const winner = summary.variantA.ctr > summary.variantB.ctr ? 'A' : 'B';
      const improvement = Math.abs(summary.variantA.ctr - summary.variantB.ctr).toFixed(2);

      // Format email
      const emailBody = `
HIO.SPACE A/B TEST WEEKLY REPORT
Week ending: ${summary.week}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VARIANT A (Original Design)
  Views:  ${summary.variantA.views}
  Clicks: ${summary.variantA.clicks}
  CTR:    ${summary.variantA.ctr}%

VARIANT B (Brutalist Design)
  Views:  ${summary.variantB.views}
  Clicks: ${summary.variantB.clicks}
  CTR:    ${summary.variantB.ctr}%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WINNER: Variant ${winner}
Improvement: ${improvement}% higher CTR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next steps:
- Continue test if sample size < 100 per variant
- Declare winner if difference is significant (>10%)
- Consider running for 2+ weeks for confidence

View detailed logs at: https://dash.cloudflare.com
      `.trim();

      // Send email via Web3Forms
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: env.WEB3FORMS_KEY,
          subject: `📊 Weekly A/B Test Report - ${summary.week}`,
          message: emailBody,
          to: 'hi@hio.space',
          from_name: 'HIO Analytics Bot'
        }),
      });

      console.log('Weekly report sent successfully');
    } catch (error) {
      console.error('Failed to send weekly report:', error);
    }
  },

  // Optional: HTTP endpoint to manually trigger report
  async fetch(request, env, ctx) {
    if (request.method === 'POST') {
      await this.scheduled(null, env, ctx);
      return new Response('Report sent', { status: 200 });
    }
    return new Response('Analytics Worker Running', { status: 200 });
  }
};
