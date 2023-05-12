import chalk from 'chalk'
import { Command } from 'commander'
import { run as envinfoRun } from 'envinfo'
import { textSync } from 'figlet'

import pkgJSON from '../package.json'

// eslint-disable-next-line no-console
console.log(textSync('Chunfen'))
// eslint-disable-next-line no-console
console.log(`v${pkgJSON.version}`)

const program = new Command()

program
  .name(pkgJSON.name)
  .description(pkgJSON.description)
  .version(pkgJSON.version)

// https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js

program
  .command('start')
  .description('run development server')
  .action(() => {
    console.log(textSync('Star'))
  })

program
  .command('build')
  .description('build ')
  .action(() => {
    console.log(textSync('Star'))
  })

program
  .command('create')
  .description('create a react project')
  .argument('<string>', 'project’s dirname')
  .action(dirname => {
    console.log('new project is ', dirname)
  })

program
  .command('info')
  .description('print debugging information about your environment')
  .action(cmd => {
    console.log(chalk.bold('\nEnvironment Info:'))
    envinfoRun(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
        npmPackages: '/**/{typescript,*chunfen*,@chunfen/*/}',
        npmGlobalPackages: ['@chunfen/cli'],
      },
      {
        showNotFound: true,
        duplicates: true,
        fullTree: true,
      },
    ).then(console.log)
  })

program.parse()
