/**
 *
 * @param {*} options
 */
function request(options) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };

    xhr.responseType = options.type;
    const header = options.header || {};
    xhr.setRequestHeader('Accept', 'application/json');

    Object.keys(header).forEach((h) => {
      xhr.setRequestHeader(h, header[h]);
    });
    xhr.send(options.data || null);
  });
}

function myInstanceof(l, r) {
  let proto = Object.getPrototypeOf(l);
  let prototype = r.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
