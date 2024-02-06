const express = require('express');
app = express();

app.use(express.static('public'))

app.get('/index', (req, res) =>{
  res.sendFile('/public/index.html', {root: __dirname});
})

app.use(express.urlencoded({ extended: true }));

app.listen(1010, () =>{
  console.log('running...')
});