module.exports = {
  name: 'markdown-editor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/markdown-editor',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
