export const GA_TRACKING_ID = 'G-2ZR7FLWEK7';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = function (url: string) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = function ({ action, category, label, value }: any) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
