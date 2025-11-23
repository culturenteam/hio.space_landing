# A/B Testing Setup Guide

Your landing page now runs A/B tests with two design variants:
- **Variant A**: Original gradient/glass design
- **Variant B**: Brutalist geometric design

## How It Works

1. **50/50 Split**: Each visitor is randomly assigned variant A or B
2. **Sticky Assignment**: Variant is saved in localStorage (consistent per browser)
3. **Tracking**: Records page views and CTA (Twitter) clicks
4. **Real-time**: Events sent immediately to hi@hio.space

## Setup Steps

### 1. Configure Web3Forms Access Key

The same access key from the contact form is used for analytics.

In `utils/analytics.ts` line 48, replace:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

With your actual key from [https://web3forms.com](https://web3forms.com)

### 2. Set Up Weekly Reports (Optional - Requires Backend)

For automated weekly summaries, you have two options:

#### Option A: Manual Review
- Check hi@hio.space inbox weekly
- Filter emails by subject: "Analytics: view" and "Analytics: cta_click"
- Count events per variant

#### Option B: Automated (Requires Cloudflare Worker)

Create a Cloudflare Worker to aggregate and email weekly:

```javascript
// Weekly cron: 0 9 * * 1 (Every Monday at 9 AM)
export default {
  async scheduled(event, env, ctx) {
    // Fetch analytics from KV storage
    // Calculate CTR per variant
    // Send summary email via Web3Forms
  }
}
```

### 3. View Local Analytics (Dev Only)

Open browser console and run:
```javascript
// Get summary
const summary = JSON.parse(localStorage.getItem('hio_analytics') || '[]');
console.table(summary);

// Calculate CTR
const events = summary;
const aViews = events.filter(e => e.variant === 'A' && e.event === 'view').length;
const aClicks = events.filter(e => e.variant === 'A' && e.event === 'cta_click').length;
const bViews = events.filter(e => e.variant === 'B' && e.event === 'view').length;
const bClicks = events.filter(e => e.variant === 'B' && e.event === 'cta_click').length;

console.log('Variant A CTR:', (aClicks / aViews * 100).toFixed(2) + '%');
console.log('Variant B CTR:', (bClicks / bViews * 100).toFixed(2) + '%');
```

## What Gets Tracked

Each event includes:
- `variant`: "A" or "B"
- `event`: "view" or "cta_click"
- `timestamp`: Unix timestamp
- `sessionId`: Unique session identifier

## Email Format

You'll receive emails at hi@hio.space like:

**Subject**: `Analytics: cta_click - Variant B`

**Body**:
```json
{
  "variant": "B",
  "event": "cta_click",
  "timestamp": 1700000000000,
  "sessionId": "abc123-xyz789"
}
```

## Testing Variants

To test both variants locally:

1. **View Variant A**: Clear localStorage and refresh (50% chance)
2. **View Variant B**: Clear localStorage and refresh (50% chance)
3. **Force Variant**: In console:
   ```javascript
   localStorage.setItem('hio_variant', 'B'); // or 'A'
   location.reload();
   ```

## Metrics to Track

- **Views**: Total page loads per variant
- **Clicks**: CTA (Twitter button) clicks per variant
- **CTR**: Click-through rate = (Clicks / Views) × 100%
- **Winner**: Variant with higher CTR after statistical significance

## Recommended Test Duration

- Minimum: 1-2 weeks
- Ideal: 1 month
- Target: 100+ views per variant for statistical significance

## Privacy Note

- No personal data collected
- Session IDs are random, not tied to users
- localStorage only (no cookies)
- Compliant with privacy manifesto
