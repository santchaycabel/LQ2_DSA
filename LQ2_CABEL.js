//1. CONDITIONAL STATEMENT
let user_password = prompt("Enter your password:");
let user_name = prompt("Enter your username:");
let password = "12345"; // Sample password
let username = "Santchay Cabel" //Sample username

if (user_password === password) {
    alert("Welcome, $ ,{user_name}"); 
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}

//2. LOOP STATEMENT
let dog_breed = prompt("Enter dog breed:");
let print_count = prompt("How many times to print?:");

for (let i = 0; i < print_count; i++) {
    console.log(dog_breed);
}

//SWITCH STATEMENT
let item_choice = prompt("Enter item choice:");
let qty = parseInt(prompt("Enter quantity:")); 
let price = 0;

switch(item_choice) {
    case 'Pepsi Cola':
        price = 20;
        break;
    case 'Coca Cola':
        price = 25;
        break;
    case 'Apple (per kg)':
        price = 100;
        break;
    case 'Orange (per kg)':
        price = 50;
        break;
    case 'Hotdogs (per kg)':
        price = 150;
        break;
    default:
        alert("No matching item! Try to re-run the program.");
        price = 0;
}

if (price > 0) {
    let total_price = price * qty;
    alert(`The total price of ${item_choice} (x${qty}) is: ₱${total_price}`);
}

//4. MATRIX STATEMENT
function matrixPrinter() {
    if (prompt("Do you want to create a matrix? (yes/no): ").toLowerCase() === "yes") {
        const rows = parseInt(prompt("Enter number of rows:"));
        const cols = parseInt(prompt("Enter number of columns:"));
        const depth = parseInt(prompt("Enter depth:"));

        const strings = [
            prompt("Enter string 1:"),
            prompt("Enter string 2:"),
            prompt("Enter string 3:")
        ];

        const matrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(strings.slice(0, depth));
            }
            matrix.push(row);
        }

        console.log(matrix);
    } else {
        console.log("Thank you, re-run the program if you change your mind.");
    }
}

matrixPrinter();
