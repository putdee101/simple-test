var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'BsProgress',
  description: 'Bootstrap Progress',
  groupName: 'Bootstrap',
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
    disabled: {
      type: 'boolean',
      title: 'Disabled'
    },
    value: {
      type: 'number',
      title: 'Value'
    }
  }
};

export { config };
