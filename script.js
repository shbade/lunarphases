let yearform = document.getElementById("user_input");
yearform.addEventListener("submit", (e) => {
    e.preventDefault;

const date = new Date();
console.log(date);

// These will be the variables that store the provided date elements, which are put into 
// the givenDate variable to provide the difference between the dates

// Take the given date and store respective values into the variables below

let givenYear = document.getElementById("year"); // year element
givenYear = parseInt(givenYear);
let givenMonth = document.getElementById("month");// month element
givenMonth = parseInt(givenMonth);
let givenDay = document.getElementById("day");// day element
givenDay = parseInt(givenDay);


// originFullMoon is for the date from which we perform calculations. this is the time of 
// a known full moon and where the cycle begins for counting cycles
const originFullMoon = new Date ("01-13-2025T11:59:59");
const givenDate = new Date (givenYear, givenMonth, givenDay);


console.log(givenDate);
});