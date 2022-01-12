const path = require('path');
module.exports = {
	entry: "./src/index.js", //代表進入點的js檔案路徑
	output: { //輸出打包編譯過後的檔案名稱與路徑設定
		filename: "index.bundle.js",
		path: path.resolve(__dirname, './dist'),
	}
}