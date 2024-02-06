// Exit on uncaught errors
const fs = require('fs');

fs.readFile('./err.txt', (err, data) =>{ // Cause error because unknown file
  if (err) throw err;
  console.log(data);
});

process.on('uncaughtException', err =>{
  console.error(`There was an uncaught error: ${err}`);  
  process.exit(1)
});