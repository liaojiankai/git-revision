'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨feat:  新功能'
    },
    {
      value: 'fix',
      name: '🐞fix:  错误修复'
    },
    {
      value: 'WIP',
      name: '💪WIP:  开始开展工作'
    },
    {
      value: 'refactor',
      name: '🛠refactor:  既不是修复错误也未添加功能 的代码更改'
    },
    {
      value: 'docs',
      name: '📚docs:  仅文档更改'
    },
    {
      value: 'test',
      name: '🏁test:  添加缺失的测试或更正现有的测试'
    },
    {
      value: 'chore',
      name: '🗯chore:  不会修改src或测试文件的更改。 例如更新构建任务，程序包管理器'
    },
    {
      value: 'style',
      name: '💅style:  代码样式，不影响代码含义的更改（空白，格式，缺少分号等）'
    },
    {
      value: 'revert',
      name: '⏪revert:  回滚'
    }
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
