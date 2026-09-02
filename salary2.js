const a={
    id: 101,
    name: "Sakshi",
    salary: 50000,
    display: function(){
        console.log("My id is: " + this.id);
        console.log("My name: " + this.name);
        console.log("My salary: " + this.salary);
    }
}

// Test the function
a.display()