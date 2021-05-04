const path = require('path')
const basePath = '/User/abc';
const filePath = 'bbb.txt';

//路径拼接
const dirNamePath = path.resolve(basePath,filePath)
console.log(dirNamePath);