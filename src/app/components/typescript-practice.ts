//main types
let userName: string = "mai tamer";
let age: number = 23;
let isIntern: boolean = true;
let skills: string[] = ["Angular", "TypeScript", "HTML", "CSS"];
let scores: number[] = [90, 80, 100];
let anything: any = "I can be anything!";

//arrange of data
let student: [string, number, boolean] = ["Ali", 21, true];

//constant variables
enum Role {
Admin = "ADMIN",
Developer = "DEVELOPER",
Intern = "INTERN"
}
let myRole: Role = Role.Developer;

// Type Alias
type Product = {
id: number;
name: string;
price: number;
inStock: boolean;
};

let product1: Product = {
id: 101,
name: "Laptop",
price: 1200,
inStock: true
};

//interface
interface Employee {
id: number;
name: string;
position: string;
salary?: number; //optional
}

const employee1: Employee = {
id: 1,
name: "Laila Hassan",
position: "Frontend Developer",
salary: 5000
};

//class
class Developer implements Employee {
id: number;
name: string;
position: string;
language: string;
salary?: number;

constructor(id: number, name: string, position: string, language: string, salary?: number) {
this.id = id;
this.name = name;
this.position = position;
this.language = language;
this.salary = salary;
}

code(): void {
console.log(`${this.name} is coding in ${this.language}!`);
}
}

// create object from class
const dev1 = new Developer
(2, "mai tamer", "Intern Developer", "TypeScript", 3000);
dev1.code();

// type interface
let message = "Welcome to TypeScript!";
let total = 42;

// Function with types
function calculateBonus(salary: number, bonusPercent: number): number {
return salary * (bonusPercent / 100);
}

console.log(`Bonus: $${calculateBonus(3000, 10)}`);

// print the results
console.log("User:", userName);
console.log("Skills:", skills);
console.log("Role:", myRole);
console.log("Product:", product1);
console.log("Employee:", employee1);
console.log("Developer:", dev1);
