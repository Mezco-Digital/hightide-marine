/**
 * Analytics utility for tracking events.
 * 
 * To use:
 * import { trackEvent } from './analytics';
 * 
 * trackEvent('click', 'call_now');
 */

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  } else {
    console.log('Analytics event (dry run):', { action, category, label, value });
  }
};

export const trackConversion = (type) => {
  trackEvent('conversion', 'leads', type);
};
