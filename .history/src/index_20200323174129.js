const runGitCommand = require('./util')

const COMMITHASH_COMMAND = 'rev-parse HEAD'
const VERSION_COMMAND = 'describe --always'
const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD'

function GitRevision(options = {
  gitWorkTree: undefined,
  commithashCommand: COMMITHASH_COMMAND,
  versionCommand: VERSION_COMMAND,
  branchCommand: BRANCH_COMMAND
}) {
//   const gitWorkTree = options.gitWorkTree || undefined
//   const commithashCommand = options.commithashCommand || COMMITHASH_COMMAND
//   const versionCommand = options.versionCommand || VERSION_COMMAND
//   const branchCommand = options.branchCommand || BRANCH_COMMAND

//   return {
//     COMMITHASH: runGitCommand(gitWorkTree, commithashCommand),
//     VERSION: runGitCommand(gitWorkTree, versionCommand),
//     BRANCH: runGitCommand(gitWorkTree, branchCommand),
//   }
}

module.exports = class GitRevision {
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
