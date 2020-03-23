const runGitCommand = require('./util')

module.exports = class GitRevision {
  constructor(options) {
    this.gitWorkTree = options.gitWorkTree || undefined
    this.commithashCommand = options.commithashCommand || 'rev-parse HEAD'
    this.gitWorkTree = options.gitWorkTree || 'describe --always'
    this.gitWorkTree = options.gitWorkTree || 'rev-parse --abbrev-ref HEAD'
  }
}
