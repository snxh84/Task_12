// Static values for the compound interest calculation
const principal = 25600;          // P - principal amount
const rate = 0.25;               // r - annual rate of interest (as a decimal)
const timesCompounded = 1;       // n - number of times interest is compounded per year
const time = 3;                 // t - time in years

// Formula: A = P(1 + (r / n))^(n * t)
const amount = principal * Math.pow(1 + (rate / timesCompounded), timesCompounded * time);

// Message displayed to the user
const message = "The compound interest after " + time + " years is: " + amount;

// Show the result on the page
const resultElement = document.getElementById("result");
if (resultElement) {
    resultElement.textContent = message;
}

// Also display the calculated compound interest (total amount) in the console
console.log(message);