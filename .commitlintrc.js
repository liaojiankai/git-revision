'use strict';

module.exports = {
  extends: [
    'cz'
  ],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        // 构建
        'build',
        // ci
        'ci',
        // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        'chore',
        // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'docs',
        // Adds a new feature. 新增feature
        'feat',
        // Solves a bug. 修复bug
        'fix',
        // 更新某功能
        'update',
        // Improves performance. 优化相关，比如提升性能、体验
        'perf',
        // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'refactor',
        // Reverts a previous commit. 回滚到上一个版本
        'revert',
        // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'style',
        // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        'test'
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};
