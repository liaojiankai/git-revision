// var exec = require('child_process').exec
// var execSync = require('child_process').execSync
// var path = require('path')
// var removeEmptyLines = require('./remove-empty-lines')

// import exec from 'child_process'

// function removeEmptyLines(string) {
//   return string.replace(/[\s\r\n]+$/, '')
// }

// export default (gitWorkTree, command, callback) => {
//   const gitCommands = gitWorkTree ?
//     [
//       'git',
//       '--git-dir=' + path.join(gitWorkTree, '.git'),
//       '--work-tree=' + gitWorkTree,
//       command
//     ].join(' '): [
//       'git',
//       command
//     ].join(' ')

//   if (callback) {
//     exec(gitCommands, function (err, stdout) {
//       if (err) {
//         return callback(err)
//       }
//       callback(null, removeEmptyLines(stdout))
//     })
//   } else {
//     return removeEmptyLines('' + execSync(gitCommands))
//   }
// }
