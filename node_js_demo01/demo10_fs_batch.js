const fs = require('fs');


let folder = 'temp';
let files = ['small.txt', 'small2.txt', 'big.txt']

function verify(file1, file2, cb) {
    fs.readFile(file1, (err, data) => {
        if (err) {
            console.log(`Error reading ${file1}: ${err.message}`)
            cb(err)
            return
        } else {
            fs.readFile(file2, (err, data2) => {
                if (err) {
                    console.log(`Error reading ${file2}: ${err.message}`)
                    cb(err)
                    return
                } else {
                    cb(null, data === data2);
                }
            })
        }
    })
}


// 1. Create a temp folder
fs.mkdir(folder, error => {
    if (error){
         console.log(`FATAL: folder ${folder} already exists`)
         return
    }

    // 2. Copy all files to temp folder
    let totalFiles = files.length;
    let processedFiles = 0;
    let success = true;
    for (let file of files) {
        let target = `${folder}/${file}`;
        console.log(`copying ${file} to ${target}`)
        fs.cp(file, target, error => {
            processedFiles++;
            if (error) {
                console.log(`Error copying ${file} to ${target}:${error}`)
                success = false;
            }
            else {
                console.log(`${file} copied to ${target}`)
                // 3. Check if the files are copied successfully
                verify(file, target, (error, result) => {
                    if (error)
                        console.log(`Error verifying ${file} and ${target}:${error}`)
                    else {
                        console.log(`${file} and ${target} are ${result ? 'identical' : 'different'}`);
                        if (!result)
                            success = false;

                    }

                    // Delete the temp file and folder after 10 seconds
                    if (processedFiles === totalFiles) {
                        setTimeout(() => {
                            let deleted = 0;

                            for (var file of files) {
                                let target = `${folder}/${file}`;
                                fs.rm(target, error => {
                                    if (error) {
                                        console.log(`Error deleting ${target}: ${error}`)
                                    }
                                    deleted++;
                                    if (deleted === files.length) {
                                        console.log(`deleting the folder`);
                                        fs.rmdirSync(folder);
                                    }
                                })
                            }


                        }, 10000);
                        console.log(`deleting temp after 10 seconds`);
                    }
                })
            }
        })
    }
})

