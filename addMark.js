const student = {

    id: 101,

    name: "Sakshi",

    college: "ABES Engineering College",

    branch: "CSE (AIML)",

    marks: 0,

    display: function() {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("College: " + this.college);
        console.log("Branch: " + this.branch);
        console.log("Marks: " + this.marks);
    },

    addMark: function(mark) {
        this.marks += mark;
        console.log("Marks added. Total Marks: " + this.marks);
    }

}

student.display();

student.addMark(50);

student.display();