const OSS = require('ali-oss');
const fs = require('fs');
const path = require('path');
const id = process.env.AccessKeyId,
  secret = process.env.AccessKeySecret;

if (!id || !secret) return;
const client = new OSS({
  endpoint: 'oss-cn-shanghai.aliyuncs.com',
  accessKeyId: id,
  accessKeySecret: secret,
  bucket: 'lagabu-blog',
});
const objArr = [];

function readDeep(dir, pathName = '') {
  const files = fs.readdirSync(dir);
  if (files.length === 0) return;
  for (const f of files) {
    const completePath = path.resolve(dir, f);
    const stat = fs.statSync(completePath);
    const name = pathName ? pathName + '/' + f : f;
    if (stat.isDirectory()) {
      readDeep(completePath, name);
    } else {
      objArr.push({
        name: name,
        localPath: completePath,
      });
    }
  }
}

(async function () {
  try {
    const result = await client.list();
    if (result.objects) {
      const files = result.objects;
      const names = files.map((f) => f.name);
      await client.deleteMulti(names);
    }
    const dist = path.resolve(__dirname, './dist');
    readDeep(dist);
    for (const obj of objArr) {
      await client.put(obj.name, obj.localPath);
    }
  } catch (err) {
    console.error(err);
  }
})();
