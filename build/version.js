const fs = require('fs');
const path = require('path');
const pathname = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pathname, 'utf-8'));
let version = pkg.version;

function execSync(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const branch = execSync('git rev-parse --abbrev-ref HEAD')

const exec = require('child_process').exec;
let cmdStr = `git commit -m "v${version}" && git push origin ${branch} && git tag -a "v${version}" -m "${version}" && git push origin --tags`;

exec(cmdStr, function (err, stdout, stderr) {
  console.log('exec:', err, stdout, stderr);
});
