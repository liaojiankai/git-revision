const GitRevision = require('../dist/index')

const gitRevision = new GitRevision()

console.log('COMMITHASH: ', gitRevision)
// console.log(
//   'commithash: ',gitRevision.commithash()
// )
// console.log(
//   'version: ', gitRevision.version()
// )
// console.log(
//   'branch: ', gitRevision.branch()
// )
