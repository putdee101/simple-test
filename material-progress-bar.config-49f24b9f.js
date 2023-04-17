var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Progress',
  description: 'Material Progress',
  groupName: 'Lilly Plugins',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false
  },
  properties: {
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
    },
    totalPages: {
      type: 'number',
      title: 'TotalPages'
    },
    currentPage: {
      type: 'number',
      title: 'CurrentPage'
    }
  }
};

export { config };
