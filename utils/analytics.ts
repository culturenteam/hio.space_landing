// A/B Testing and Analytics Utilities

export type Variant = 'A' | 'B';

interface AnalyticsEvent {
  variant: Variant;
  event: 'view' | 'cta_click';
  timestamp: number;
  sessionId: string;
}

// Get or create session ID
export const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('hio_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('hio_session_id', sessionId);
  }
  return sessionId;
};

// Get or assign variant (sticky per user)
export const getVariant = (): Variant => {
  let variant = localStorage.getItem('hio_variant') as Variant | null;
  
  if (!variant) {
    // 50/50 split
    variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('hio_variant', variant);
  }
  
  return variant;
};

// Track event
export const trackEvent = async (event: 'view' | 'cta_click', variant: Variant) => {
  const analyticsEvent: AnalyticsEvent = {
    variant,
    event,
    timestamp: Date.now(),
    sessionId: getSessionId()
  };

  // Store locally
  const events = getStoredEvents();
  events.push(analyticsEvent);
  localStorage.setItem('hio_analytics', JSON.stringify(events));

  // Send to backend
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Same as contact form
        subject: `Analytics: ${event} - Variant ${variant}`,
        message: JSON.stringify(analyticsEvent, null, 2),
        to: 'hi@hio.space',
        from_name: 'HIO Analytics'
      }),
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};

// Get stored events
export const getStoredEvents = (): AnalyticsEvent[] => {
  try {
    const stored = localStorage.getItem('hio_analytics');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Get analytics summary
export const getAnalyticsSummary = () => {
  const events = getStoredEvents();
  
  const summary = {
    A: {
      views: events.filter(e => e.variant === 'A' && e.event === 'view').length,
      clicks: events.filter(e => e.variant === 'A' && e.event === 'cta_click').length,
      ctr: 0
    },
    B: {
      views: events.filter(e => e.variant === 'B' && e.event === 'view').length,
      clicks: events.filter(e => e.variant === 'B' && e.event === 'cta_click').length,
      ctr: 0
    }
  };

  summary.A.ctr = summary.A.views > 0 ? (summary.A.clicks / summary.A.views) * 100 : 0;
  summary.B.ctr = summary.B.views > 0 ? (summary.B.clicks / summary.B.views) * 100 : 0;

  return summary;
};
