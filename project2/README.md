# Project 2
建立一個簡單的Express Server配合上NodeJs讀取local files

## GetStarted
### 使用 [Node File System](https://nodejs.org/api/fs.html) 讀取和寫入資料 (students.json)  
```
// Read Data
const filePath = './students.json';
fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data);
});
```
### 建立你的npm repo，並安裝[Express](http://expressjs.com/en/starter/installing.html)
```
npm init
npm i express --save
```
### 建立[Express Server](http://expressjs.com/en/starter/hello-world.html)
```
const PORT = process.env.PORT || 3000;
const serverApp = require('express')();
serverApp.set('port', PORT);

serverApp.get('/', (req, res) => {
    res.send('Yo~')
});

serverApp.listen(serverApp.get('port'), () => {
    console.log('serverApp listening on port ' + serverApp.get('port'));
});
```
### 建立基本的restApi, Create-Read-Update-Delete，更改你的`students.json`
```
serverApp.put('/student', (req, res) => {
    // handle here
});
...
```
### 使用[Postman](https://www.getpostman.com/)測試你的API
```
[GET] http://localhost:PORT/
...
```
## 檔案
1. server.js
2. students.json
