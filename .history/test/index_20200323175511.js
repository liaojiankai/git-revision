const GitRevision = require('../dist/index')

const gitRevision = new GitRevision()

console.log(
  'commithash: ',gitRevision.commithash()
)
console.log(
  'version: ', gitRevision.version()
)
console.log(
  'branch: ', gitRevision.branch()
)
