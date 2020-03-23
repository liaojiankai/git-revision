import {execSync } from 'child_process'

export function exec(cmd) {
  return execSync(cmd).toString().trim()
}
