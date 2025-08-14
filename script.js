// ==================== Part 1: Basics ====================
// Variable declarations & conditionals
let userName = "John";
let hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("greeting").textContent = `Good morning, ${userName}!`;
} else {
    document.getElementById("greeting").textContent = `Good day, ${userName}!`;
}

// ==================== Part 2: Functions ====================
// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format a string
function formatMessage(message) {
    return `*** ${message.toUpperCase()} ***`;
}

document.getElementById("totalBtn").addEventListener("click", function () {
    let total = calculateTotal(10, 3); // Example values
    document.getElementById("totalOutput").textContent = formatMessage(`Total is $${total}`);
});

// ==================== Part 3: Loops ====================
// For loop example
document.getElementById("showNumbers").addEventListener("click", function () {
    let list = document.getElementById("numberList");
    list.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
});

// While loop example (countdown)
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}

// ==================== Part 4: DOM Manipulation ====================
// 1. Change background color
document.getElementById("changeColor").addEventListener("click", function () {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// 2. Add new list item dynamically
document.getElementById("addItem").addEventListener("click", function () {
    let ul = document.getElementById("dynamicList");
    let li = document.createElement("li");
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
});

// 3. DOM text change (from Part 1 already included)
