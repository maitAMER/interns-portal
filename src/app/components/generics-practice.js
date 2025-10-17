// Generic Function
function getFirstElement(arr) {
    return arr[0];
}
// Examples
var numbers = [10, 20, 30];
var names = ["sara", "omar", "laila"];
console.log("First number:", getFirstElement(numbers));
console.log("First name:", getFirstElement(names));
var userResponse = {
    status: 200,
    message: "User data fetched successfully",
    data: {
        id: 1,
        name: "Mai Tamer",
        email: "mai@gmail.com"
    }
};
var productResponse = {
    status: 200,
    message: "Product data",
    data: {
        id: 101,
        name: "Laptop",
        price: 1200
    }
};
// Log results
console.log("User Response:", userResponse);
console.log("Product Response:", productResponse);
