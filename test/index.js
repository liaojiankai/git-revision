const GitRevision = require('../dist/index')

const gitRevision = new GitRevision()
const {
  COMMITHASH,
  VERSION,
  BRANCH
} = gitRevision

  console.log(COMMITHASH, VERSION, BRANCH);




console.log('COMMITHASH: ', gitRevision)
console.log(
  'commithash: ',gitRevision.commithash()
)
console.log(
  'version: ', gitRevision.version()
)
console.log(
  'branch: ', gitRevision.branch()
)
