const shell = require('shelljs');

shell.rm('-rf', './*.html', './_assets', './.vitepress/dist', './dist', './docs');
shell.exec('npx vitepress build');
shell.mv('./.vitepress/dist', './dist');

// shell.rm('-rf', './.vitepress/dist')