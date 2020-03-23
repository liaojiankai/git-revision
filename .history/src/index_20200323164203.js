function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

console.log(exec('npm--version '))
