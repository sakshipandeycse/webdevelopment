// Employee and Manager Payroll System
class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

// Derived class
class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    // Method overriding
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

const manager = new Manager(101, 'Amit', 50000, 15000);
console.log('Employee ID:', manager.id);
console.log('Employee Name:', manager.name);
console.log('Total Salary:', manager.calculateSalary());