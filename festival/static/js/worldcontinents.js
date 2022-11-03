let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
let t4 = document.querySelector('.t4');
let t5 = document.querySelector('.t5');
let t6 = document.querySelector('.t6');

let p = document.querySelector('p');
let map = document.querySelector('.map');
let body = document.querySelector('body');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');
let card5 = document.querySelector('.card5');
let card6 = document.querySelector('.card6');

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let div5 = document.querySelector('.div5');
let div6 = document.querySelector('.div6');
let div7 = document.querySelector('.div7');
let div8 = document.querySelector('.div8');
let div9 = document.querySelector('.div9');
let div10 = document.querySelector('.div10');
let div11 = document.querySelector('.div11');
let div12 = document.querySelector('.div12');
let div13 = document.querySelector('.div13');
let div14 = document.querySelector('.div14');
let div15 = document.querySelector('.div15');
let div16 = document.querySelector('.div16');
let div17 = document.querySelector('.div17');
let div18 = document.querySelector('.div18');
let div19 = document.querySelector('.div19');
let div20 = document.querySelector('.div20');

let f1 = document.querySelector('#f1');
let f2 = document.querySelector('#f2');
let f3 = document.querySelector('#f3');
let f4 = document.querySelector('#f4');
let f5 = document.querySelector('#f5');
let f6 = document.querySelector('#f6');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');


t1.addEventListener('click', function () {
  
  card3.style.display = 'block';
  f1.classList.add('p1');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t2.addEventListener('click', function () {

  card6.style.display = 'block';
  f2.classList.add('p2');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t3.addEventListener('click', function () {
  card2.style.display = 'block';
  f3.classList.add('p3');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t4.addEventListener('click', function () {
  card5.style.display = 'block';
  f4.classList.add('p4');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});



t5.addEventListener('click', function () {
  card1.style.display = 'block';
  f5.classList.add('p5');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t6.addEventListener('click', function () {
  card4.style.display = 'block';
  f6.classList.add('p6');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

document.body.addEventListener('click', function (e) {
  console.log('body click');
  if (e.target.classList.contains('icon') === false) {
    f1.classList.remove('p1');
    f2.classList.remove('p2');
    f3.classList.remove('p3');
    f4.classList.remove('p4');
    f5.classList.remove('p5');
    f6.classList.remove('p6');

    p.style.display = 'block';
    p.style.transition = '1.5s';

    card1.style.display='none';
    card2.style.display='none';
    card3.style.display='none';
    card4.style.display='none';
    card5.style.display='none';
    card6.style.display='none';

  }
});
