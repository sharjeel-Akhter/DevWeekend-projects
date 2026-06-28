// class user {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     display() {                       // Method to display user information
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// let user1 = new user("Alice", 30);
// user1.display();    

// let user2 = new user("Bob", 25);
// user2.display(); 

// let user3 = new user("Charlie", 35);
// user3.display();


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.active = false; // Default value for active status
    }

    login() {
        this.active = true;
        console.log(`${this.name} has logged in.`);
    }
    logout() {
        this.active = false;
        console.log(`${this.name} has logged out.`);
    }

    display() {
        if (this.active) {
            console.log(`${this.name} is currently active.`);
            console.log(`info:Name: ${this.name}, Age: ${this.age}`);
        }
    }
}

// let user1 = new User("Alice", 30);
// user1.login();
// user1.display();


// inheritance
class Student extends User {
    constructor(name, age, studentId,semester) {
        super(name, age); // Call the parent class constructor
        this.studentId = studentId;
        this.semester = semester;
    }

    display() {
        super.display();  // Call the parent class display method
        console.log(`Student ID: ${this.studentId}, Semester: ${this.semester}`);
    }

}

// let user1 = new User("Alice", 30);
// user1.login();
// user1.display();

// let student1 = new Student("David", 20, "S123", "Fall 2023");
// student1.login();
// student1.display();

// static method is a method that belongs to the class itself rather than an instance of the class. It can be called without creating an instance of the class. Static methods are often used for utility functions that are related to the class but do not require access to instance properties.

class MathUtils {
    static result = 0;

    static add(number) {
        this.result += number;
    }
    static subtract(number) {
        this.result -= number;
    }
    static multiply(number) {
        this.result *= number;
    }
    static divide(number) {
        this.result /= number;
    }
}

// console.log(MathUtils.result); // Output: 0
// MathUtils.add(5);
// console.log(MathUtils.result); // Output: 5 

// MathUtils.subtract(2);
// console.log(MathUtils.result); // Output: 3

// MathUtils.multiply(4);
// console.log(MathUtils.result); // Output: 12

// MathUtils.divide(3);
// console.log(MathUtils.result); // Output: 4


