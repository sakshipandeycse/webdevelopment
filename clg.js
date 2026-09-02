const employee = {
    name: "Sakshi",
    salary: 40000,

    display: function() {
        console.log("name =", this.name);
        console.log("salary =", this.salary);
    },

    increaseSalary: function(amount) {
        this.salary = this.salary + amount;
    }
};

employee.display();
employee.increaseSalary(5000);
employee.display();

// Function with different objects
function show(){
    console.log("address=", this.address);
    console.log("city=", this.city);
}

e = {
    address: "abes engineering college",
    city: "ghaziabad",
    show: show
}

f = {
    address: "university of edinburgh",
    city: "edinburgh",
    show: show
}

e.show();
f.show();

// College function
function college(){
    console.log("My college name is: " + this.collegeName);
    console.log("My college location is: " + this.collegeLocation);
    console.log("My college established year is: " + this.collegeEstablishedYear);
}

department = {
    name: "Computer Science",
    collegeName: "ABC College",
    collegeLocation: "New York",
    collegeEstablishedYear: 1990,
    show: college
}

courseClass = {
    name: "Data Structures",
    collegeName: "ABC College",
    collegeLocation: "New York",
    collegeEstablishedYear: 1990,
    show: college
}

department.show();
courseClass.show();