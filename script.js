// Additions could include a function that prints how many phases will have passed at a future 
// given date.


let millisecondsToDays = 1000 * 60 * 60 * 24; // converts time given by js into days
const LENGTHOFCYCLE = 29.5; //number of days in a full moon cycle

let anchorDate = new Date(1-13-2025) // the date of the last know full moon used to find future dates
let userDate = prompt("Enter date in YYYY-MM-DD format.")
const originDate = '2025-01-13';
let cycleRemainder;
let phase;


function calculateDifferenceinDays(originDate, userDate) {
    // convert the dates to milliseconds
    let anchor = new Date(originDate).getTime();
    let chosenDate = new Date(userDate).getTime();
    
    // calculate the difference in milliseconds
    let differenceInMillis = chosenDate - anchor;
    
    // Convert the difference from milliseconds to days
    let differenceInDays = differenceInMillis / millisecondsToDays;
    
    return differenceInDays;
  }

  // this one will help get the user input 
  // let userDate = document.getElementById('')

  let daysPassed = calculateDifferenceinDays(originDate, userDate);
  
  console.log(daysPassed); // will print the number of days between the origin date and given date
  phasesPast = Math.trunc(daysPassed/LENGTHOFCYCLE)
  cycleRemainder = daysPassed % LENGTHOFCYCLE;


  // switch determines which phase matches the completion percentage
  switch (true)
  {
    case (cycleRemainder < 12.5):
        phase = "Full Moon";
        console.log("It is printing");
        break;
    case (cycleRemainder < 25 && cycleRemainder >= 12.5):
        phase = "Waning Gibbous";
        break;
    case (cycleRemainder < 37.5 && cycleRemainder >= 25):
        phase = "Third Quarter";
        break;
    case (cycleRemainder < 50 && cycleRemainder >= 37.5):
        phase = "Waning Crescent";
        break;
    case (cycleRemainder < 62.5 && cycleRemainder >= 50):
        phase = "New Moon";
        break;
    case (cycleRemainder < 75 && cycleRemainder >= 62.5):
        phase = "Waxing Crescent";
        break;
    case (cycleRemainder < 87.5 && cycleRemainder >= 75):
        phase = "First Quarter";
        break;
    case (cycleRemainder >= 87.5):
        phase = "Waxing Gibbous";
        break;
  }

console.log("the moon is "+ cycleRemainder +"% complete in its cycle");
console.log("The moon is in the " + phase + " phase.");


