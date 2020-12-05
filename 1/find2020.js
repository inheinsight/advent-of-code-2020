const readline = require('readline');
const fs = require ('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('expenses.txt'),
    console: false
});

var data = [];

readInterface.on('line', (line) => {
    data.push(line);
});

readInterface.on('close', () => {
    var inputs = [];
    var answer;
    for (var i =0;  i<data.length; i++) {
        var a = parseInt(data[i]);
        for(var x=0; x<data.length; x++) {
            var b =parseInt(data[x]);
            for (var y = 0; y<data.length; y++) {
                var c = parseInt(data[y]);
                if (a+b+c == 2020) {
                    inputs.push(a, b, c);
                    answer = a*b*c; 
                    console.log(inputs);
                    console.log(answer); 
                    return;
                }
            }
        }
    }


});