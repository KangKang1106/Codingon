let countNumber = document.querySelector('h2');
let derease = document.getElementById('decrease');
derease.addEventListener('click', function() {
    countNumber.innerText = `${Number(countNumber.innerText)-1}`;
    if (Number(countNumber.innerText > 0)) {
        countNumber.style.color = 'green';
    } else if (Number(countNumber.innerText < 0)) {
        countNumber.style.color = 'red';
    } else {
        countNumber.style.color = 'black';
    }
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    countNumber.innerText = Number(0);
    countNumber.style.color = 'black';
})

let increase = document.getElementById('increase');
increase.addEventListener('click', function() {
    countNumber.innerText = `${Number(countNumber.innerText)+1}`;
    if (Number(countNumber.innerText) > 0) {
        countNumber.style.color = 'green';
    } else if (Number(countNumber.innerText < 0)) {
        countNumber.style.color = 'red';
    } else {
        countNumber.style.color = 'black';
    }
})