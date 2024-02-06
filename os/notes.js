
/* OS module */
const os = require('os');
const path = require('path');

let currentOS = {
  name: os.type(),
  architecture: os.arch(),
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
  directory: __dirname,
  filename: __filename
};

console.log(currentOS);
console.log(`The server has been up for ${os.uptime()} seconds.`);
console.log(path.parse(__filename))