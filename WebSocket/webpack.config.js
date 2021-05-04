const path = require('path')
module.exports = {
  entry: './2.js',
  output: {
    //动态获取路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle1.js'
  }

}