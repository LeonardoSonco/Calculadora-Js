const calcEqual = document.querySelector("#equal");
const setnumber = document.querySelectorAll(".number");
const display = document.getElementById("screen");
const miniDisplay = document.querySelector(".mini__screen");
const operationType = document.querySelectorAll(".operation");
const displayClear = document.querySelector("#clear");
const calcNegativo = document.querySelector("#sign");

let isDisplayZero = true;
let currentOperator = "";
let currentDisplayValue=0;
let currentMiniValue = 0;

const updateDisplay = (value)=>{
    if(isDisplayZero){
        display.textContent = "";
        isDisplayZero = false;
    }
    display.textContent +=value;
}

setnumber.forEach((button)=>{
    button.addEventListener("click",()=>{
        updateDisplay(button.textContent)
    })
})

function doubleOperator(currentOperator){
    
    if(currentMiniValue === 0){
        currentMiniValue = display.textContent;
    }
    else if(currentOperator==="+"){

        currentMiniValue = (parseFloat(valueDisplay))+(parseFloat(currentMiniValue));
        currentMiniValue = parseFloat(currentMiniValue.toFixed(5));   
    }
    else if(currentOperator==="-"){
        currentMiniValue = parseFloat(currentMiniValue)-parseFloat(valueDisplay);
        currentMiniValue = parseFloat(currentMiniValue.toFixed(5));
    }
    else if(currentOperator==="*"){
        currentMiniValue = parseFloat(currentMiniValue)*parseFloat(valueDisplay);
        currentMiniValue = parseFloat(currentMiniValue.toFixed(5));  
    }
    else if(currentOperator==="/"){
        currentMiniValue = parseFloat(currentMiniValue)/parseFloat(valueDisplay);
        currentMiniValue = parseFloat(currentMiniValue.toFixed(5));
    }
    else if(currentOperator==="%"){
        currentMiniValue = (parseFloat(currentMiniValue)*parseFloat(valueDisplay))/100;
        currentMiniValue = parseFloat(currentMiniValue.toFixed(5));
    }
  
    miniDisplay.textContent = currentMiniValue;
}

operationType.forEach((button)=>{
    button.addEventListener("click",()=>{
        const operation = button.textContent;
        
        if(operation==="+"){
            currentOperator = "+";
        }
        else if(operation==="-"){
            currentOperator = "-";
        }
        else if(operation==="X"){
            currentOperator = "*";
        }
        else if(operation==="/"){
            currentOperator = "/";
        }
        else if(operation==="%"){
            currentOperator = "%";
        }

        valueDisplay = display.textContent;
        doubleOperator(currentOperator,currentMiniValue)
        display.textContent = "0";
        isDisplayZero = true;

    })
})

const calculate = (v1, operation, v2) => {
    let result = 0;
    if (operation === "+") {
      result = (parseFloat(v1)) + (parseFloat(v2));
    } else if (operation === "-") {
      result = parseFloat(v1) - parseFloat(v2);
    } else if (operation === "*") {
      result = parseFloat(v1) * parseFloat(v2);
    } else if (operation === "/") {
      result = parseFloat(v1) / parseFloat(v2);
    } else if (operation === "%") {
      result = parseFloat(v1)*parseFloat(v2)/100;
    }
    
    return parseFloat(result.toFixed(5));
  };

calcEqual.addEventListener("click", () => {
    valueDisplay = display.textContent;
    miniDisplay.textContent = ""
    display.textContent = calculate(currentMiniValue,currentOperator,valueDisplay)
    currentMiniValue = 0;
    valueDisplay=0;

});

displayClear.addEventListener("click",()=>{
    display.textContent = "0";
    miniDisplay.textContent = "";
    valueDisplay=0;
    currentMiniValue =0;
    currentOperator="";
    isDisplayZero = true;
});

calcNegativo.addEventListener("click", () => {
    const number = +display.textContent;
    if (Math.sign(number) === -1) {
      display.textContent = Math.abs(number);
    } else {
        display.textContent = Math.abs(number) * -1;
    }
  });