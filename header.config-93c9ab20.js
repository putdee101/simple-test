var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Header',
  description: 'Custom Header',
  groupName: 'Header/Footer',
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
