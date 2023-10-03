
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiEL = document.querySelector('#output');
const weightConditionEL = document.querySelector('#weight-condition');
const btnEL = document.querySelector('.btn');

btnEL.addEventListener('click', () => {
    const heightVal = heightEl.value/100;
    const weightVal = weightEl.value;
    const bmiVal = weightVal/(heightVal * heightVal);
    bmiEL.value = bmiVal;

    if(bmiVal >= 30){
        weightConditionEL.innerHTML = 'Obese!!! needs Serious lifestyle change and medical advise.';
        weightConditionEL.style.color = 'red';
    }
    if(bmiVal >= 25 && bmiVal <30){
        weightConditionEL.innerHTML = 'Overweight!!! needs lifestyle change and medical advise.';
        weightConditionEL.style.color = 'yellow';
    }
    if(bmiVal >= 18.5 && bmiVal <25){
        weightConditionEL.innerHTML = 'Healthy!!!';
        weightConditionEL.style.color = 'green';
    }
    if(bmiVal <18){
        weightConditionEL.innerHTML = 'Underweight!!!';
        weightConditionEL.style.color = 'yellow';
    }
})
