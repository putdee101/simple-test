var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Footer',
  description: 'Custom Footer',
  groupName: 'Lilly Plugins',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false
  },
  properties: {
    link1Text: {
      title: 'Link1 Text',
      type: 'string'
    },
    link1URL: {
      title: 'Link1 URL',
      type: 'string'
    },
    link2Text: {
      title: 'Link2 Text',
      type: 'string'
    },
    link2URL: {
      title: 'Link2 URL',
      type: 'string'
    },
    link3Text: {
      title: 'Link3 Text',
      type: 'string'
    },
    link3URL: {
      title: 'Link3 URL',
      type: 'string'
    }
  }
};

export { config };
