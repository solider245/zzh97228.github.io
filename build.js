const shell = require('shelljs');

shell.rm('-rf', './index.html', './_assets', './.vitepress/dist', './dist', './docs');
shell.exec('npx vitepress build');
shell.mv('./.vitepress/dist', './docs');

// shell.rm('-rf', './.vitepress/dist')