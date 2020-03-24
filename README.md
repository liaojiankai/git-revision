# @ernan/git-revision

## 用于说明 commit 的类别，只允许使用下面7个标识

```js
  feat: 新功能（feature）
  fix: 修补bug
  docs: 文档（documentation）
  style:  格式（不影响代码运行的变动）
  refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
  test: 增加测试
  chore: 构建过程或辅助工具的变动
```

## Example

```js
const GitRevision = require('../dist/index')

const gitRevision = new GitRevision({} = {
  gitWorkTree: undefined,
  commithashCommand: 'rev-parse HEAD',
  versionCommand: 'describe --always',
  branchCommand: 'rev-parse --abbrev-ref HEAD'
})

const {
  COMMITHASH,
  VERSION,
  BRANCH
} = gitRevision

console.log(COMMITHASH, VERSION, BRANCH);

```
