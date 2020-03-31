//Select UI inputs
//Select display
const display = document.querySelector(".calc-display");
//Select operator buttons
const opBtn = document.querySelectorAll(".btn-op");
//Select number buttons
const numBtn = document.querySelectorAll(".btn-num");
//Select equals button
const equalsBtn = document.querySelector(".btn-equals");
//Select clear button
const clearBtn = document.querySelector(".btn-clear");

//Calculator display variable
let calcDisplay = "";

//Overall calculation variable
let overallCalc = "";


//Add event listeners to buttons
//Number buttons
numBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        //Add each digit to the calcDisplay variable
        calcDisplay += btn.textContent;
        //Add to display
        display.textContent = calcDisplay;
    });
});

//Operator buttons
opBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        //Add operator to calcDisplay variable
        calcDisplay += btn.textContent;
        //Add to overall calculation
        overallCalc += calcDisplay;
        //Clear display
        display.textContent = "";
        //Clear calcDisplay variable
        calcDisplay = "";
    });
});


//Equals button
equalsBtn.addEventListener("click", e => {
    //Add calcDisplay value to overallCalc variable
    overallCalc += calcDisplay
    //Evaluate overallCalc and display on screen
    display.textContent = eval(overallCalc);

});

//Clear button
clearBtn.addEventListener("click", e => {
    //Clear display
    display.textContent = "";
    //Clear calcDisplay variable
    calcDisplay = "";
    //Clear overallCalc variable
    overallCalc = "";
});