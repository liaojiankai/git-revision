# @ernan/git-revision

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
