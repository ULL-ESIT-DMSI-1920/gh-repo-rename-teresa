//const ins = require("util").inspect;
//const deb = (...args) => 

// comander // 
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .option('-r, --repo', '')
  .option('-o, --org', '')

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('');
if (options.repo) console.log('');
if (options.org) console.log(``);


// comprobar que git y gh están instalados //

 if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.which('gh')) {
 shell.echo('Sorry, this script requires gh cli');
 shell.exit(1);
}

const org = options.org;
if (!org){
    if (program.org.length < 2){ program.help}
}