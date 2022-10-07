let sum1 = 0;
// let sum2 = 0;

for(n=1; n<100; n++) {
  if(n%2 === 0 || n%3 === 0) {
    sum1 = sum1 + n;
  }
}
console.log(sum1);
