// mk = make

const fs = require('fs');

fs.mkdir(__dirname + '/test', (err) => {
    console.log(err);
});