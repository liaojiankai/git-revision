/*!
 * git-revision.js v0.0.4
 * (c) 2018-2020 ernan <ernan@global.com>
 * Released under the MIT License.
 */
import { exec, execSync } from 'child_process';
import path from 'path';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function removeEmptyLines(string) {
  return string.replace(/[\s\r\n]+$/, '');
}

function runGitCommand(gitWorkTree, command, callback) {
  var gitCommand = gitWorkTree ? ['git', '--git-dir=' + path.join(gitWorkTree, '.git'), '--work-tree=' + gitWorkTree, command].join(' ') : ['git', command].join(' ');

  if (callback) {
    exec(gitCommand, function (err, stdout) {
      if (err) {
        return callback(err);
      }

      callback(null, removeEmptyLines(stdout));
    });
  } else {
    return removeEmptyLines('' + execSync(gitCommand));
  }
}

var GitRevision = /*#__PURE__*/function () {
  function GitRevision() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck(this, GitRevision);

    this.gitWorkTree = options.gitWorkTree || undefined;
    this.commithashCommand = options.commithashCommand || 'rev-parse HEAD';
    this.versionCommand = options.versionCommand || 'describe --always';
    this.branchCommand = options.branchCommand || 'rev-parse --abbrev-ref HEAD';
    this.COMMITHASH = this.commithash();
    this.VERSION = this.version();
    this.BRANCH = this.branch();
  }

  createClass(GitRevision, [{
    key: "commithash",
    value: function commithash() {
      return runGitCommand(this.gitWorkTree, this.commithashCommand);
    }
  }, {
    key: "version",
    value: function version() {
      return runGitCommand(this.gitWorkTree, this.versionCommand);
    }
  }, {
    key: "branch",
    value: function branch() {
      return runGitCommand(this.gitWorkTree, this.branchCommand) || runGitCommand(this.gitWorkTree, 'describe --contains --all HEAD');
    }
  }]);

  return GitRevision;
}();

export default GitRevision;
