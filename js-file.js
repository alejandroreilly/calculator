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
let inputNum1 = '';
let inputOperator = null;
let inputNum2 = '';
let needToClearDisplay = false;

//display number on screen
answerDisplay.textContent=0;

//setup the clear button
function clearDisplay(){
    answerDisplay.textContent='';
    needToClearDisplay = false;
}

function clearAll(){
    answerDisplay.textContent='0';
    equationDisplay.textContent="";
    inputNum1='';
    inputOperator=null;
    inputNum2='';
}
clear.addEventListener('click',clearAll);

//setup the signChange
function changeSign(){
    return;
}
signChange.addEventListener('click',changeSign);

//setup the delete button
function deleteOne(){
    answerDisplay.textContent = answerDisplay.textContent.toString().slice(0,-1);
}
del.addEventListener('click',deleteOne);

//setup number buttons
numButtons.forEach((button) => {
    button.addEventListener('click',()=>addNumber(button.textContent));
});
//add number for the number buttons
function addNumber(num){
    if(answerDisplay.textContent === '0' || needToClearDisplay){
        answerDisplay.textContent='';
    }
    answerDisplay.textContent+=num;
};

//setup operator buttons
opButtons.forEach((button)=>{
    button.addEventListener('click', () => addOperation(button.textContent));
});
function addOperation(operation){
    if (inputOperator !== null){
        doMath();
    }
    inputNum1 = answerDisplay.textContent;
    inputOperator=operation;
    equationDisplay.textContent = `${inputNum1} ${inputOperator}`;
    needToClearDisplay = true;
}

//main function for evaluation
function doMath(){
    if(inputOperator === null || needToClearDisplay){
        return
    }
    //handle divide by 0
    if(inputOperator === '/' && answerDisplay.textContent === "0"){
        alert("You can't divide by 0, silly!");
        return;
    }

    inputNum2 = answerDisplay.textContent;
    answerDisplay.textContent=Math.round(operate(inputOperator, inputNum1, inputNum2) * 1000 / 1000);
    equationDisplay.textContent = `${inputNum1} ${inputOperator} ${inputNum2} = `;
    inputOperator = null;
}

//choose which operation to do
function operate(operator, one, two){
    one = Number(one);
    two = Number(two);
    switch(operator){
        case '+':
            return add(operator, one, two);
        case '-':
            return subtract(operator, one, two);
        case '*':
            return multiply(operator, one, two);
        case '/':
            if(two === 0){
                return null;
            }
            else{
                return divide(operator, one, two);
            }
        default:
            return null;
    }
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}