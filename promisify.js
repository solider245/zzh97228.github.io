const fs = require('fs');

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.apply(
        null,
        args.concat((err, data) => {
          if (err != null) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      );
    });
  };
}

const read = promisify(fs.readFile);

read('./idx.md')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
