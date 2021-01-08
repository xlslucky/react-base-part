const shell = require('shelljs')

function init() {
  shell.exec('git add ./dist/')
  shell.exec(`git commit -m 'chore(build): update build'`)
}

init()
