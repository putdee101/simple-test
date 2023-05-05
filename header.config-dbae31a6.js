var config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Header',
  description: 'Custom Header',
  groupName: 'Lilly Plugins',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false,
    visibility: true
  },
  properties: {
    height: {
      type: 'number',
      title: 'Height of the image in pixels'
    },
    width: {
      type: 'number',
      title: 'Width of the image in pixels'
    },
    imgUrl: {
      type: 'string',
      title: 'URL of the Image'
    }
  }
};

export { config };
