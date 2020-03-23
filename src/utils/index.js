
export function removeEmptyLines(string) {
  return string.replace(/[\s\r\n]+$/, '')
}
export function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}
