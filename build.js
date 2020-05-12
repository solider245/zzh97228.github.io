const shell = require('shelljs');

shell.rm('-rf', './dist');
shell.exec('npx vitepress build');
shell.mv('./.vitepress/dist', './dist');
