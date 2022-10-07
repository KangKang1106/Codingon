function clickMe () {
  let span = document.querySelector('span');
  let backcolor = `#${Math.round(Math.random()*0xffffff).toString(16)}`;
  // let section = document.querySelector('section');
  document.body.style.backgroundColor = backcolor;
  span.innerText = backcolor;
  span.style.color = 'rgb(0,100,250)';
}