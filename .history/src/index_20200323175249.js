const runGitCommand = require('./util')

const COMMITHASH_COMMAND = 'rev-parse HEAD'
const VERSION_COMMAND = 'describe --always'
const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD'

class GitRevision {
  constructor(options) {
    this.gitWorkTree = options.gitWorkTree || undefined
    this.commithashCommand = options.commithashCommand || 'rev-parse HEAD'
    this.versionCommand = options.versionCommand || 'describe --always'
    this.branchCommand = options.branchCommand || 'rev-parse --abbrev-ref HEAD'
  }

  commithash() {
    return runGitCommand(this.gitWorkTree, this.commithashCommand)
  }
  version() {
    return runGitCommand(this.gitWorkTree, this.versionCommand)
  }
  branch() {
    return runGitCommand(this.gitWorkTree, this.branchCommand)
  }
}

module.exports = GitRevision
