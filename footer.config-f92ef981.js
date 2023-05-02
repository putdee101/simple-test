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
      title: 'Prescribing Information Text',
      type: 'string',
      defaultValue: 'Prescribing Information'
    },
    link1URL: {
      title: 'Prescribing Information Link',
      type: 'string',
      defaultValue: 'https://www.lilly.com/'
    },
    link2Text: {
      title: 'Instructions for Use Text',
      type: 'string',
      defaultValue: 'Instructions for Use'
    },
    link2URL: {
      title: 'Instructions for Use Link',
      type: 'string',
      defaultValue: 'https://www.lilly.com/'
    },
    link3Text: {
      title: 'Medication Guide Text',
      type: 'string',
      defaultValue: 'Medication Guide'
    },
    link3URL: {
      title: 'Medication Guide Link',
      type: 'string',
      defaultValue: 'https://www.lilly.com/'
    },
    firstLine: {
      title: 'Age and Residency Text',
      type: 'string',
      defaultValue: 'This site is intended for US residents ages 18 and older.'
    },
    secondLine: {
      title: 'Product Trademark Text',
      type: 'string',
      defaultValue: 'XXXXXXXX is a trademark owned or licensed by Eli Lilly and Company, Its subsidiaries, or affiliates.'
    },
    singleLine: {
      title: 'Single Line Text (MMN)',
      type: 'string',
      defaultValue: 'XX-XX-XX-XXXX MM/YYYY'
    },
    thirdLine: {
      title: 'Questions Text',
      type: 'string',
      defaultValue: 'Any Questions?'
    },
    thirdLinePhoneNumber: {
      title: 'Questions Phone Number',
      type: 'string',
      defaultValue: 'Call 123-456-7890'
    }
  }
};

export { config };
