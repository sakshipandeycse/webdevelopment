//with CONSTRUCTOR


// class Student {
//     constructor(name, rollNo, admissionNo, mobileNumber) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.admissionNo = admissionNo;
//         this.mobileNumber = mobileNumber;
    
        
//             console.log("Name: " + this.name);
//             console.log("Roll No: " + this.rollNo);
//             console.log("Admission No: " + this.admissionNo);
//             console.log("Mobile Number: " + this.mobileNumber);
//     } 
//         }

//         const student = new Student("Sakshi", 101, "A1001", "9876543210");


//WITHOUT CONSTRUCTOR

// class Student {
//     displayDetails() {
//         console.log("Name: " + this.name);
//         console.log("Roll No: " + this.rollNo);
//         console.log("Admission No: " + this.admissionNo);
//         console.log("Mobile Number: " + this.mobileNumber);
//     }
// }

// const student = new Student();
// student.name = "Sakshi";
// student.rollNo = 101;
// student.admissionNo = "A1001";
// student.mobileNumber = "9876543210";
// student.displayDetails();











//Static member and function
// class A{
//     static name="This is Static Variable";
//     static display(){
//         console.log(A.name);
//     }
// }
// A.display();


// static method with instance variable
// class Hello{
//     static name="Example of static method with instance variable";
//     constructor(){
//         this.instanceVar="Instance variable";
//     }
//     show(){
//         console.log("Static variable: " +Hello.name);
//         console.log("Instance variable: "+this.instanceVar);
//     }
// }
// let h=new Hello();
// h.show();

// without Constructor
// class Hello {

//     static name = "Example of static method with instance variable";

//     show() {
//         this.instanceVar = "Instance variable";

//         console.log("Static variable: " + Hello.name);
//         console.log("Instance variable: " + this.instanceVar);
//     }
// }

// let h = new Hello();
// h.show();

// class Student {
//     static totalStudents = 0;

//     constructor(rollNo, name, marks) {
//         this.rollNo = rollNo;
//         this.name = name;
//         this.marks = marks;
//         Student.addStudent();
//     }

//     displayDetails() {
//         console.log("Roll No: " + this.rollNo);
//         console.log("Name: " + this.name);
//         console.log("Marks: " + this.marks);
//     }

//     static addStudent() {
//         Student.totalStudents++;
//     }

//     static displayTotalStudents() {
//         console.log("Total students: " + Student.totalStudents);
//     }
// }

// const student1 = new Student(101, "Sakshi", 85);
// const student2 = new Student(102, "Rimjhim", 90);
// const student3 = new Student(103, "Shawsti", 88);

// student1.displayDetails();
// student2.displayDetails();
// student3.displayDetails();

// Student.displayTotalStudents();

class BankAccount {
    static totalAccounts = 0;

    constructor(accountHolder, accountNumber, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        BankAccount.totalAccounts++;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited ₹" + amount + ". New balance: ₹" + this.balance);
            return this.balance;
        }
        console.log("Deposit amount must be greater than 0.");
        return this.balance;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn ₹" + amount + ". Remaining balance: ₹" + this.balance);
            return this.balance;
        }
        console.log("Insufficient balance or invalid amount.");
        return this.balance;
    }

    checkBalance() {
        console.log("Current balance for " + this.accountHolder + ": ₹" + this.balance);
        return this.balance;
    }

    displayAccountDetails() {
        console.log("Account Holder: " + this.accountHolder);
        console.log("Account Number: " + this.accountNumber);
        console.log("Balance: ₹" + this.balance);
    }

    static showTotalAccounts() {
        console.log("Total accounts: " + BankAccount.totalAccounts);
    }
}

const account1 = new BankAccount("Sakshi", "ACC101", 5000);
const account2 = new BankAccount("Rimjhim", "ACC102", 3000);

account1.deposit(1500);
account1.withdraw(700);
account1.checkBalance();
account1.displayAccountDetails();

account2.deposit(2000);
account2.withdraw(3500);
account2.checkBalance();

BankAccount.showTotalAccounts();

// Bank Account Management