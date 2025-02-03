// Additions could include a function that prints how many phases will have passed at a future 
// given date.


const millisecondsToDays = 1000 * 60 * 60 * 24; // converts time given by js into days
const LENGTHOFCYCLE = 29.6; //number of days in a full moon cycle

const anchorDate = new Date(1 - 13 - 2025) // the date of the last know full moon used to find future dates
// let userDate = prompt("Enter date in YYYY-MM-DD format.")
const originDate = '2025-01-13';
const chosenDate = document.getElementById("dateInput")





// this one will help get the user input 
// let userDate = document.getElementById('')

//Variable for the photo of the moon
// let Moon = "./Moon pics/lunar_phases.gif";

//make variable and set them to blank
// switch determines which phase matches the completion percentage

function moonPhaseCalc(chosenDate) {
    let phase;
    let daysPassed;
    let phasesPast = Math.trunc(daysPassed / LENGTHOFCYCLE)
    let cycleRemainder = daysPassed % LENGTHOFCYCLE;
    let photoElement = document.getElementById("")

    function calculateDifferenceinDays() {
        let userDateElement = document.getElementById('dateInput');
        // convert the dates to milliseconds
        let anchor = new Date(originDate).getTime();
        let chosenDate = new Date(userDateElement.value).getTime();

        // calculate the difference in milliseconds
        let differenceInMillis = chosenDate - anchor;

        // Convert the difference from milliseconds to days
        let differenceInDays = differenceInMillis / millisecondsToDays;
        return differenceInDays;
    }
    function printResults() {
        const divElement = document.getElementById("resultsDiv");
        divElement.innerHTML = "The moon will be in its " + phase + " phase.";
    }

    daysPassed = calculateDifferenceinDays(chosenDate);

    console.log(daysPassed); // will print the number of days between the origin date and given date
    phasesPast = Math.trunc(daysPassed / LENGTHOFCYCLE)
    cycleRemainder = (daysPassed % LENGTHOFCYCLE) * 3.389;
    console.log(cycleRemainder);

    if (cycleRemainder >= 0) {
        switch (true) {
            case (cycleRemainder < 12.5):
                phase = "Full Moon";
                setMoonPhoto("./Moon pics/Full moon.jpg");
                break;
            case (cycleRemainder < 25 && cycleRemainder >= 12.5):
                phase = "Waning Gibbous";
                setMoonPhoto("./Moon pics/Waning Gibbous.jpg");
                break;
            case (cycleRemainder < 37.5 && cycleRemainder >= 25):
                phase = "Third Quarter";
                setMoonPhoto("./Moon pics/Third Quarter.jpeg");
                break;
            case (cycleRemainder < 50 && cycleRemainder >= 37.5):
                phase = "Waning Crescent";
                setMoonPhoto("./Moon pics/Waning Crescent.jpeg");
                break;
            case (cycleRemainder < 62.5 && cycleRemainder >= 50):
                phase = "New Moon";
                setMoonPhoto("./Moon pics/New moon.jpeg");
                break;
            case (cycleRemainder < 75 && cycleRemainder >= 62.5):
                phase = "Waxing Crescent";
                setMoonPhoto("./Moon pics/Waxing Cresent.jpeg");
                break;
            case (cycleRemainder < 87.5 && cycleRemainder >= 75):
                phase = "First Quarter";
                setMoonPhoto("./Moon pics/First Quarter.jpeg");
                break;
            case (cycleRemainder >= 87.5):
                phase = "Waxing Gibbous";
                setMoonPhoto("./Moon pics/Waxing Gibbous.jpeg");
                break;
        }console.log(phase);
        printResults();
    }
    else {
        switch (true) {
            case (cycleRemainder > -12.5):
                phase = "New Moon";
                setMoonPhoto("./Moon pics/New moon.jpeg");
                break;
            case (cycleRemainder > -25 && cycleRemainder <= -12.5):
                phase = "Waxing Crescent";
                setMoonPhoto("./Moon pics/Waxing Cresent.jpeg");
                break;
            case (cycleRemainder > -37.5 && cycleRemainder <= -25):
                phase = "First Quarter";
                setMoonPhoto("./Moon pics/First Quarter.jpeg");
                break;
            case (cycleRemainder > -50 && cycleRemainder <= -37.5):
                phase = "Waxing Gibbous";
                setMoonPhoto("./Moon pics/Waxing Gibbous.jpeg");
                break;
            case (cycleRemainder > -62.5 && cycleRemainder <= -50):
                phase = "Full Moon";
                setMoonPhoto("./Moon pics/Full moon.jpg");
            case (cycleRemainder > -75 && cycleRemainder <= -62.5):
                phase = "Waning Gibbous";
                setMoonPhoto("./Moon pics//Waning Gibbous.jpg");
                break;
            case (cycleRemainder > -87.5 && cycleRemainder <= -75):
                phase = "Third Quarter";
                setMoonPhoto("./Moon pics/Third Quarter.jpeg");
            case (cycleRemainder <= 87.5):
                phase = "Waning Crescent";
                setMoonPhoto("./Moon pics/Waning Crescent.jpeg");
                break;
        }
        printResults();
        console.log(phase);
    }
}


//console.log("the moon is "+ cycleRemainder +"% complete in its cycle");
//console.log("The moon is in the " + phase + " phase.");
//moonPhaseCalc();
function updateUI(img, button) {

}
function setMoonPhoto(imgPath) {
    imageElement = document.getElementById("moon");
    imageElement.setAttribute("src", imgPath);
}
function debug() {
    let daysPassed = calculateDifferenceinDays();

}
