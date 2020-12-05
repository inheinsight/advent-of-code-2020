const readline = require('readline');
const fs = require ('fs');

const rl= readline.createInterface({
    input: fs.createReadStream('passwords.txt'),
    console: false
});

var data = [];
var lineParts;

rl.on('line', (line) => {
    lineParts = line.split(" ");
    data.push(lineParts);
});

rl.on('close', () => {
    var valid =[];

    for(var z = 0; z<data.length;z++){
        var range = data[z][0].split("-");
        var letter = data[z][1].match(/[a-z-A-Z]/g);
        var word = data[z][2];
    
        var rgxp = new RegExp(letter[0], "g");
        var numChars = word.match(rgxp);
        if(numChars != null) {
            if (numChars.length >= range[0] && numChars.length <= range[1]) {
                valid.push(numChars);
            }
        }
    }
    console.log(valid.length);   
});