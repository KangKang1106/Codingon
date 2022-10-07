let googoodan = 0;
for(a = 2; a <= 9; a++) {
  console.log('**** '+a+'단 ****')
  for(b = 1; b <= 9; b++) {
    googoodan = a * b;
    console.log(a + '*' + b + '=' + googoodan);
  }
}