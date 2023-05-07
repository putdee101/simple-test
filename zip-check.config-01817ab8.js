var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'ZipCheck',
  description: 'Plugin to check entered Zip Code and validate it against State',
  groupName: 'Lilly Plugins',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false,
    visibility: true
  },
  properties: {
    apiKey: {
      type: 'string',
      title: 'Smarty API Key'
    },
    pageName: {
      type: 'string',
      title: 'Page Name'
    }
  }
};

export { config };
