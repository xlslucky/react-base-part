const shell = require('shelljs')

function init() {
  shell.exec('npm run build')
  shell.exec('git add ./dist/')
  shell.exec(`git commit -m 'chore(build): update build'`)
}

init()
