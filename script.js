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
        total = num1Value + num2Value;
        answer.innerHTML = parseFloat(total.toFixed(3));
    }else if (optionCal === '-'){
        total = num1Value - num2Value
        answer.innerHTML = parseFloat(total.toFixed(3));
    }else if(optionCal === '*'){
        total = num1Value * num2Value;
        answer.innerHTML = parseFloat(total.toFixed(3));
    }else if(optionCal === '/'){
        if(num2Value === 0){
            answer.innerHTML = 'Cannot divide by Zero'
        }else{
            total = num1Value / num2Value;
            answer.innerHTML = parseFloat(total.toFixed(3));
        }
        
    }
    
    event.preventDefault();
}

form.addEventListener('submit', function(event){
    eval();
});
