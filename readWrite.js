
//get the file names from arguments
var myArgs = process.argv.slice(2);

const fs = require('fs');

//read the first file and if it exist write its data in second file
fs.readFile(myArgs[0], 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    else {
        try {
            fs.writeFileSync(myArgs[1], reverseString(data))
            console.log("File Written Successfully");
        } catch (err) {
            console.error(err)
        }
    }
})

//function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");

}