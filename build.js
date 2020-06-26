const shell = require('shelljs');

shell.rm('-rf', './index.html', './_assets');
shell.exec('npx vitepress build');
shell.mv('./.vitepress/dist/*', '.');
shell.rm('-rf', './.vitepress/dist')