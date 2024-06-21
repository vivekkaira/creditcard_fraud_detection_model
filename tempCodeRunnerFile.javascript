var student = [3, 9, 18, 3, 28, 6, 17, 9, 3];
var duplicates = {};

for (var i = 0; i < student.length; i++) {
    if (student.indexOf(student[i]) !== i) {
        duplicates[student[i]] = true;
    }
}

console.log("Duplicate values: ", Object.keys(duplicates));
