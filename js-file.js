//query the buttons
const clear = document.querySelector("#clearButton");
const del = document.querySelector("#deleteButton");
const signChange = document.querySelector("#signChangeButton");
const opButtons = document.querySelectorAll("#operationButton");
const numButtons = document.querySelectorAll("#numButton");
const equal = document.querySelector("#equalButton");
const decimal = document.querySelector("#decimalButton");
const answerDisplay = document.querySelector(".answerContainer");
const equationDisplay = document.querySelector(".equationContainer");

//set input variables
let inputNum1;
let inputOperator;
let inputNum2;

//display number on screen
display.textContent = displayNum;

//setup the clear button
function clearDisplay(){
    displayNum = 0;
    answerDisplay.textContent=displayNum;
}
clear.addEventListener('click',clearDisplay);

//setup the signChange
function changeSign(){
    displayNum *= (-1);
    answerDisplay.textContent=displayNum;
}
signChange.addEventListener('click',changeSign);

//setup the delete button
function deleteOne(){
    answerDisplay.textContent = answerDisplay.textContent.toString().slice(0,-1);
}
del.addEventListener('click',deleteOne);