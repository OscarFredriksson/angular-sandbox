module.exports = {
  name: 'component-delete',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/component-delete',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
