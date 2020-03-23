import runGitCommand from './util'

const COMMITHASH_COMMAND = 'rev-parse HEAD'
const VERSION_COMMAND = 'describe --always'
const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD'


console.log('xxx: ', runGitCommand(
  COMMITHASH_COMMAND,
  VERSION_COMMAND,
  BRANCH_COMMAND
));
