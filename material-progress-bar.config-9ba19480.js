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
    value1: {
      type: 'number',
      title: 'Value1'
    },
    value2: {
      type: 'number',
      title: 'Value2'
    },
    value3: {
      type: 'number',
      title: 'Value3'
    }
  }
};

export { config };
