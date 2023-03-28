var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Progress',
  description: 'Material Progress',
  groupName: 'Material',
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
      isValueField: true,
      title: 'Value'
    }
  }
};

export { config };
