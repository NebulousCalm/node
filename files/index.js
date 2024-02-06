const fs = require('fs');

fs.readFile('./templatefiles/starter.txt', (err, data) =>{
  if (err) throw err;
  console.log(data.toString());
})

/*
  try this also:

fs.readFile('./templatefiles/starter.txt', 'utf8', (err, data) =>{
  if (err) throw err;
  console.log(data);
})

*/

fs.writeFile('./templatefiles/reply.txt', 'this is the text added to the file.', (err) =>{
  if (err) throw err;
});


fs.appendFile('./templatefiles/append.txt', 'Appended text', (err) =>{
  if (err) throw err;
});