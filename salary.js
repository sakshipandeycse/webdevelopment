const a={
    id: 101,
    name: "Sakshi",
    salary: 50000,
    
    sal: function(){
        console.log("My id is:" + this.id)
    },
    
    getName: function(){
        console.log("My name is:" + this.name)
    },
    
    getSalary: function(){
        console.log("My salary is: $" + this.salary)
    },
    
    getDetails: function(){
        console.log("ID: " + this.id + ", Name: " + this.name + ", Salary: $" + this.salary)
    },
    
    updateSalary: function(newSalary){
        this.salary = newSalary
        console.log("Salary updated to: $" + this.salary)
    },
    
    calculateBonus: function(percentage){
        const bonus = (this.salary * percentage) / 100
        console.log("Bonus (" + percentage + "%): $" + bonus)
        return bonus
    }
}

// Test the functions
a.sal()
a.getName()
a.getSalary()
a.getDetails()
a.updateSalary(60000)
a.calculateBonus(15)