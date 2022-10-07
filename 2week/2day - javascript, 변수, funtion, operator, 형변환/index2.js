console.log('connect');

// 함수
// - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// - 2단계 : 함수 정의 -> 함수 호출

// 함수 정의
// function functionName() {
//   // do something
// }

// 함수 호출
// functionName();

// 함수 선언식
function helloWorld() { // 정의
  console.log('helloworld');
}
helloWorld(); // 호출

// 함수 표현식
const helloWorld2 = function () { // 정의
  console.log('helloworld2');
}
helloWorld2(); // 호출

// return 키워드
// - 변환값 -> 함수 내부 코드의 최종 결과값
// 함수 내부 코드의 최종 값을 저장하고 보관하려고 등장한 키워드
function helloWorld3() {
  return "helloworld3";
}
console.log(helloWorld3());

const helloWorld4 = function () {
  return "helloworld4"; 
}
console.log(helloWorld4());

// 다양한 함수 만들기
// case1.매개변수 (인자) 1개
function hello1(text) {
  return text; // return '안녕'
}
console.log(hello1("안녕"));

// case2. 매개변수 (인자) 2개
function hello2 (text, name) {
  // let result = text + name;
  let result = `${text} 나는 ${name}이야`; // let result = "안녕 나는 kang이야"
  return result; // return "안녕 나는 kang이야"
}
console.log(hello2('안녕', 'kang'));

// case3. return 없이 함수에서 바로 console.log() 찍기
function hello3(text, name) { // 안녕, kang
  console.log(`${text} 나는 ${name}이야`); // 안녕 나는 kang이야
}
hello3('안녕', 'kang');

// case4. case2를 함수 표현식 hello4
let hello4 = function(text, name) {
  let result = `${text} 나는 ${name}이야`;
  return result;
}
console.log(hello4('안녕', 'kang4'));

// case5. case3를 함수 표현식 hello5
let hello5 = function(text, name) {
  console.log(`${text} 나는 ${name}이야`);
}
hello5('안녕', 'kang5');

// * 주의 *
// 하나의 js 파일에서 동일한 함수명 정의 X
// 항상 함수를 정의 후 호출


function countNum() {
  let count = 7; // 함수 안에서 변수 선언 및 할당
  console.log('count 값1 :', count); // 7
}
countNum(); // 함수 호출
// console.log('count 값2 :', count); // error

// 지역 변수
// - 함수 안에서 선언한 변수는 함수 안에서만 유효하다
// - 지역 변수는 함수의 body를 버어나면 접근할 수 없다

let count2 = 0; // 전역 변수
console.log('count2 값1 :', count2); //77

function countNum2() {
  count2 =77;
  console.log('count2 값2 :', count2); //77
}
countNum2();
console.log('count2 값3 :', count2); //77
// - 함수 안에서 사용되는 변수가 밖에서도 쓰인다면 전역 변수를 활용

let color = 'red';
console.log(color); // red
function printColor() {
  let color = 'green';
  console.log(color); // green
}
printColor();
console.log(color); // red

// 지역 변수와 전역 변수의 이름이 동일한 경우 함수 안에서는 지역 변수를 사용

let animal = 'dog';
function who() {
  let animal = 'cat';
  console.log(animal);  // cat
}
who();
console.log(animal);  // dog