var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'GoogleAnalytics',
  description: 'Google Analytics',
  groupName: 'Analytics',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false
  },
  properties: {
    titleField: {
      type: 'string',
      title: 'Title'
    },
    src: {
      type: 'string',
      title: 'Source URL',
      description: 'URL of the iframe, please note many sites block been rendered in iframes',
      defaultValue: 'https://www.googletagmanager.com/ns.html?id=GTM-PXL5B34'
    }
  }
};

export { config };
