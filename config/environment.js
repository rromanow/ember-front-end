/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'embertest',
    environment: environment,
    baseURL: '/',
    namespace: '',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'self' 'unsafe-inline' cdn.plaid.com ",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' www.clearbanc.com clearbanc.com www.clearbanc.co clearbanc.co cdn.plaid.com cdnjs.cloudflare.com www.google-analytics.com connect.facebook.net api.segment.io cdn.segment.com cdn.ravenjs.com *.intercom.io js.intercomcdn.com platform.twitter.com",
      'font-src': "'self' fonts.gstatic.com data: ",
      'connect-src': "'self' localhost:3000 api.clearbanc.com api-staging.clearbanc.com api.clearbanc.co api-staging.clearbanc.co api.segment.io http://*.intercom.io wss://*.intercom.io",
      'img-src': "'self' cdn.plaid.com www.google-analytics.com lorempixel.com https://*.getsentry.com js.intercomcdn.com static.intercomassets.com www.facebook.com https://*.twitter.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com ",
      'media-src': "'self' data: blob:",
      'frame-src': "'self' cdn.plaid.com static.ak.facebook.com s-static.ak.facebook.com staticxx.facebook.com www.facebook.com http://*.twitter.com "
     },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    moment: {
      allowEmpty: true,
      includeTimezone: 'all'
    },
  };

  if (environment === 'development') {

    ENV.defaultHost = 'http://localhost:3000'

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.defaultHost = 'http://localhost:3000'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
