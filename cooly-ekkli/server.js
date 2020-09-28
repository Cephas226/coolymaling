let express = require('express');
let server = express();
let cors = require('cors')
let upload = require('express-fileupload');
let importExcel = require('convert-excel-to-json');
let del = require('del');
var XLSX = require('xlsx')

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
var uploadVar;
var xlData
server.use(upload());

server.get('/',(req,res)=>{

  var uploadVar =[]
    this.xlData.map(d=>{
     uploadVar.push(d)
  })
 console.log(uploadVar)
 res.send(uploadVar)
})

server.post('/upload',(req,res)=>{
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  req.files.file0.mv('./excel/'+req.files.file0.name,(err)=>{
    if (err)
    return res.status(500).send(err);
  res.send('File uploaded!');
  var workbook = XLSX.readFile('./excel/'+req.files.file0.name);
  var sheet_name_list = workbook.SheetNames;
  this.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log('succès')
  });
});
server.listen(3000,()=>{
  console.log('CORS-enabled web server listening on port 3000')
})