// studentModule.js - Local module

// Define the Student class
class Student {
  constructor(name, rollNumber, grade) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
  }

  // Method to display student details
  displayDetails() {
    console.log("Student Details:");
    console.log("Name:", this.name);
    console.log("Roll Number:", this.rollNumber);
    console.log("Grade:", this.grade);
  }
}

// Export the Student class to make it accessible in other files
module.exports = Student;
