const fs = require('fs').promises
const createFile = async () => {
    try {
        await fs.writeFile('Sample1.txt', 'This is written using Nodejs WriteFile')
        console.log('File is written')
    }
    catch (err) {
        console.log(err)
    }
}

createFile();

const readtheFile = async () => {
    try {
        const data = await fs.readFile('Sample1.txt')
        console.log(data.toString())
    }
    catch (e) {
        console.log(e)
    }
}

readtheFile()

const appendToFile = async () => {
    try {
        await fs.appendFile("example.txt", "\nThis is appended content!");
        console.log("Data appended successfully!");
    } catch (error) {
        console.error("Error appending data:", error.message);
    }
};

appendToFile();

console.log('Process ID:', process.pid); // Process ID
console.log('Node version:', process.version); // Node.js version
console.log('Platform:', process.on); // Operating system platform
