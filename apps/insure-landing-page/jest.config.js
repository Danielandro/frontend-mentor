module.exports = {
  name: 'insure-landing-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/insure-landing-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
