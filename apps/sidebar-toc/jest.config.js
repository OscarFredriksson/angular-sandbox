module.exports = {
  name: 'sidebar-toc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sidebar-toc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
