'use strict';

const express = require('express');

// require and use "multer"...

const app = express();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
function handlerPOST(req, res) {
  res.json({'name' : req.file.originalname, 'type' : req.file.mimetype, 'size' : req.file.size});
};
app.route("/api/fileanalyse").post(upload.single('upfile'), handlerPOST);


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
