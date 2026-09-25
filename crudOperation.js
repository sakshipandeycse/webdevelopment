// CRUD OPERATION

const fs = require('fs');

// CREATE
fs.writeFile("std.txt", "\nName: Sakshi", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

// READ
fs.readFile("std.txt", "utf8", (err, data) => {
    if (err) {
        console.log(`Unsuccessful ${err}`);
    } else {
        console.log(`File has been read: ${data}`);
    }
});

// UPDATE / APPEND
fs.appendFile("std.txt", "\nAge: 19", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully");
    }
});

// DELETE
fs.unlink("std.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted");
    }
});