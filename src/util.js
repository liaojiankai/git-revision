
import { exec, execSync } from 'child_process'
import path from 'path'

function removeEmptyLines(string) {
  return string.replace(/[\s\r\n]+$/, '')
}

export function runGitCommand (gitWorkTree, command, callback) {
  var gitCommand = gitWorkTree
    ? [
      'git',
      '--git-dir=' + path.join(gitWorkTree, '.git'),
      '--work-tree=' + gitWorkTree,
      command
    ].join(' ')
    : [
      'git',
      command
    ].join(' ')

  if (callback) {
    exec(gitCommand, function (err, stdout) {
      if (err) { return callback(err) }
      callback(null, removeEmptyLines(stdout))
    })
  } else {
    return removeEmptyLines('' + execSync(gitCommand))
  }
}
