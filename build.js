const shell = require('shelljs');

shell.rm('-rf', './index.html', './_assets', './.vitepress/dist', './dist');
shell.exec('npx vitepress build');
shell.mv('./.vitepress/dist/index.html', '.');
shell.mv('./.vitepress/dist', './dist');

// shell.rm('-rf', './.vitepress/dist')