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
    }
  }
};

export { config };
