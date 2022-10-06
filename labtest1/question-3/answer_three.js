//Vaibhav Guliani
// 101336421
//Lab test - 1 (Answer3)

console.log("Vaibhav Guliani(101336421)")
console.log("Lab test - 1 (Answer3)")
console.log(" ")

const fs = require("fs");

const createLogs = () => {
    const target = "./logs";
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
    process.chdir(target);
    for (let i = 0; i < 10; i++) {
        fs.writeFile(`log${i}.txt`, `This is the log file number ${i}`, (err) =>
            err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(`log${i}.txt`)
        );
    }
};

const removeLogs = () => {
    const target = "./logs";
    if (fs.existsSync(target)) {
        process.chdir(target);
        fs.readdir(process.cwd(), (err, files) => {
            files.forEach((file) => {
                fs.unlink(file, (err) =>
                    err ? console.error(`Error deleting file '${file}'`) : console.log(`delete files...${file}`)
                );
            });
        });
    }
};

//console.log(createLogs()); // Creating logs (text files) in log folder
console.log(removeLogs()); // Deleting or removing logs (text files) from log folder