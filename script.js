var num1 = document.querySelector('#numb1');
var num2 = document.querySelector('#numb2');
var form = document.querySelector('.form');
var optionCals = document.querySelector('#cal');
var answer = document.querySelector('.ans');

function eval(){
    var num1Value = parseFloat(num1.value);
    var num2Value = parseFloat(num2.value);
    var optionCal = optionCals.value;

    if(optionCal === "+"){
        answer.innerHTML = num1Value + num2Value;
    }else if (optionCal === '-'){
        answer.innerHTML = num1Value - num2Value;
    }else if(optionCal === '*'){
        answer.innerHTML = num1Value * num2Value;
    }else if(optionCal === '/'){
        if(num2Value === 0){
            answer.innerHTML = 'Cannot divide by Zero'
        }else{
            answer.innerHTML = num1Value / num2Value;
        }
        
    }
    
    event.preventDefault();
}

form.addEventListener('submit', function(event){
    eval();
});
