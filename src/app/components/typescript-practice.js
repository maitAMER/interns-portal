//main types
var userName = "mai tamer";
var age = 23;
var isIntern = true;
var skills = ["Angular", "TypeScript", "HTML", "CSS"];
var scores = [90, 80, 100];
var anything = "I can be anything!";
//arrange of data
var student = ["Ali", 21, true];
//constant variables
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Developer"] = "DEVELOPER";
    Role["Intern"] = "INTERN";
})(Role || (Role = {}));
var myRole = Role.Developer;
var product1 = {
    id: 101,
    name: "Laptop",
    price: 1200,
    inStock: true
};
var employee1 = {
    id: 1,
    name: "Laila Hassan",
    position: "Frontend Developer",
    salary: 5000
};
//class
var Developer = /** @class */ (function () {
    function Developer(id, name, position, language, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.language = language;
        this.salary = salary;
    }
    Developer.prototype.code = function () {
        console.log("".concat(this.name, " is coding in ").concat(this.language, "!"));
    };
    return Developer;
}());
// create object from class
var dev1 = new Developer(2, "mai tamer", "Intern Developer", "TypeScript", 3000);
dev1.code();
// type interface
var message = "Welcome to TypeScript!";
var total = 42;
// Function with types
function calculateBonus(salary, bonusPercent) {
    return salary * (bonusPercent / 100);
}
console.log("Bonus: $".concat(calculateBonus(3000, 10)));
// print the results
console.log("User:", userName);
console.log("Skills:", skills);
console.log("Role:", myRole);
console.log("Product:", product1);
console.log("Employee:", employee1);
console.log("Developer:", dev1);
