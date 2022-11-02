function changeColor(fiveColor) {
  return new Promise(function (resolve, reject) { 
    setTimeout(function () {
      document.body.style.backgroundColor = fiveColor;
      resolve();
    } ,1000);
  });
}

changeColor('red')
  .then(function (){
    return changeColor('orange');
})
  .then(function() {
    return changeColor('yellow');
})
  .then(function() {
    return changeColor('green');
})
  .then(function() {
    return changeColor('blue');
}); 