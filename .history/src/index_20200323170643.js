const runGitCommand = require('./util')

const COMMITHASH_COMMAND = 'rev-parse HEAD'
const VERSION_COMMAND = 'describe --always'
const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD'


console.log('xxx: ', runGitCommand(
  null,
  COMMITHASH_COMMAND,
  // VERSION_COMMAND,
  // BRANCH_COMMAND
));
console.log('xxx: ', runGitCommand(
  null,
  VERSION_COMMAND,
  // BRANCH_COMMAND
));
console.log('xxx: ', runGitCommand(
  null,
  BRANCH_COMMAND
));
