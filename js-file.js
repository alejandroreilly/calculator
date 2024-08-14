//query the buttons
const clear = document.querySelector("#clearButton");
const del = document.querySelector("#deleteButton");
const signChange = document.querySelector("#signChangeButton");
const opButtons = document.querySelectorAll("#operationButton");
const numButtons = document.querySelectorAll("#numButton");
const equal = document.querySelector("#equalButton");
const decimal = document.querySelector("#decimalButton");
const display = document.querySelector(".textContainer");

//set input variables
let displayNum = 0;
let inputNum1;
let inputOperator;
let inputNum2;

//display number on screen
display.textContent = "displayNum";