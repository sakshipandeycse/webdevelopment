const a={
    id: 101,
    name: "Sakshi",
    salary: 50000,
    display: function(){
        console.log("My id is: " + this.id);
        console.log("My name: " + this.name);
        console.log("My salary: " + this.salary);
    },
    increaseSalary: function(){
        this.salary+=10000;
        console.log("My salary increased to: " + this.salary);
    }
}

a.display()
a.increaseSalary()
a.display()