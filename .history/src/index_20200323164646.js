function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}
