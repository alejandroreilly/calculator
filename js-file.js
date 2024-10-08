//query the buttons
const clear = document.querySelector("#clearButton");
const del = document.querySelector("#deleteButton");
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

//setup decimal button
function addDecimal(){
    if(needToClearDisplay){
        clearDisplay;
    }
    if(answerDisplay.textContent===''){
        answerDisplay.textContent='0';
    }
    if(answerDisplay.textContent.includes('.')){
        return
    }
    answerDisplay.textContent+='.';
}
decimal.addEventListener('click',addDecimal);
//setup the clear button
function clearDisplay(){
    answerDisplay.textContent='';
    needToClearDisplay = false;
}

//handle clear all
function clearAll(){
    answerDisplay.textContent='0';
    equationDisplay.textContent="";
    inputNum1='';
    inputOperator=null;
    inputNum2='';
    needToClearDisplay=false;
}
clear.addEventListener('click',clearAll);

//setup equals sign
equal.addEventListener('click', doMath);

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
        clearDisplay();
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
    equationDisplay.textContent = `${inputNum1}${inputOperator}`;
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
    answerDisplay.textContent=Math.round(operate(inputOperator, inputNum1, inputNum2) * 1000) / 1000;
    equationDisplay.textContent = `${inputNum1}${inputOperator}${inputNum2}= `;
    inputOperator = null;
}

//choose which operation to do
function operate(operator, one, two){
    one = Number(one);
    two = Number(two);
    switch(operator){
        case '+':
            return add(one, two);
        case '-':
            return subtract(one, two);
        case '*':
            return multiply(one, two);
        case '/':
            if(two === 0){
                return null;
            }
            else{
                return divide(one, two);
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

//KEYBOARD SUPPORT vv
window.addEventListener('keydown', handleKeyboardInput);
function handleKeyboardInput(e){
    if (e.key >= 0 && e.key <= 9) addNumber(e.key);
    if (e.key === '.') addDecimal();
    if (e.key === '=' || e.key === 'Enter') doMath();
    if (e.key === 'Backspace') deleteOne();
    if (e.key === 'Escape') clearAll();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        addOperation(e.key);
    }
}