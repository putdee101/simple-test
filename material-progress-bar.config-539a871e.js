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
    currentPage: {
      type: 'number',
      title: 'CurrentPage'
    },
    totalPages: {
      type: 'number',
      title: 'TotalPages'
    }
  }
};

export { config };
