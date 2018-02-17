const qr = require('qr-image');
const express = require('express');
const app = express();

app.get('/qr', function(req,res){
  var code = qr.image('http://www.google.com', { type: 'svg' });
  console.log(code);
  res.type('svg');
  code.pipe(res);
});

const server = app.listen(5000,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log('server started at ',server.address().port);
    }
});