// Generic Function
function getFirstElement<T>(arr: T[]): T {
return arr[0];
}

// Examples
const numbers = [10, 20, 30];
const names = ["sara", "omar", "laila"];

console.log("First number:", getFirstElement(numbers));
console.log("First name:", getFirstElement(names));


// Generic Interface
interface ApiResponse<T> {
status: number;
message: string;
data: T;
}

// Example 1: User Response
type User = {
id: number;
name: string;
email: string;
};

const userResponse: ApiResponse<User> = {
status: 200,
message: "User data fetched successfully",
data: {
id: 1,
name: "Mai Tamer",
email: "mai@gmail.com"
}
};

// Example 2: Product Response
type ProductInfo = {
id: number;
name: string;
price: number;
};

const productResponse: ApiResponse<ProductInfo> = {
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
