

// var number1 = document.querySelector('#num1');
// var number2 = document.querySelector('#num2');

//Step 1 get numbers (1 and 2_) Change value 1 
// number1.value = "0";

function Calculator() {
    var answer = document.querySelector('#answer');
    var number1 = Number(document.querySelector('#num1').value);
    var number2 = Number(document.querySelector('#num2').value);
    var select = document.querySelector('select');

    var theAnswer;


    var operator = select.options[select.selectedIndex].value;
    // console.log(operator);

    
    if (operator == "add") {
        theAnswer = number1 + number2;
    } else if (operator == "minus") {
        theAnswer = number1 - number2;
    } else if (operator == "divide") {
        theAnswer = number1 / number2;
    } else if (operator == "multiply") {
        theAnswer = number1 * number2;
    } else {
        alert("Please select correct operator");
        theAnswer = "Inavlid operator";
    }

    
    

    answer.innerHTML = theAnswer;

};

