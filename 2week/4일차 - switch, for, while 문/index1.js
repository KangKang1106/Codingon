// 반복문
// - for 문
// - while 문

// for 문
/*
  for (초기값; 조건식; 증강값) {
    // 반복할 코드
  }
*/

// i++ : i = i + 1
// i-- : i = i - 1

// case1. 0~4 출력
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log('반복문 끝');

// case2. 1~5 출력
for (let i = 1; i <= 5 ; i++) {
  console.log(i);
}
console.log('반복문 끝');

// case3. 5부터 1까지 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('반복문 끝');

// case4. 1부터 10까지 출력 (단, 짝수만)
// 반복 1부터 10까지 + 2로 나눈 나머지가 0일 때만 출력
// 반복문 + 조건문
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log('반복문 끝');

// ver2. 증강값 변경
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
console.log('반복문 끝');

// 퀴즈) 1부터 10까지 합 구하기
let sum = 0; // 합을 저장할 변수 생성
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum); // 55
console.log('반복문 끝');

// 퀴즈) 1부터 10까지 짝수의 합 구하기
let sum2 = 0;
for (let i = 1; i <=10; i++) {
  if(i%2 === 0) {
    sum2 = sum2 + i;
  }
}
console.log(sum2);
console.log('반복문 끝');

// while 문
/*
  while (조건식) {
    // 반복할 코드
  }
  => 조건식 만족; 블럭({}) 내부 코드 실행
  => 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
    - if문 : 조건식 true -> 블럭 내부 코드 1번 실행
    - while문 : 조건식 true -> 계속 반복
  => 조건식 flase : 블럭을 빠져나옴 (= 반복 종료)
*/

// case1. 1~5 반복
let n = 1; // 반복 변수 초기값 설정
while (n <= 5) { // 조건식
  console.log(n);
  n = n + 1; // n++ 증강값
}
console.log('반복문 끝');

// 퀴즈)
// case2. 9부터 4까지 while문으로 반복
let n1 = 9;
while (n1 >= 4) {
  console.log(n1);
  n1 = n1 - 1;
}
console.log('반복문 끝');

// case3. 1부터 10까지 짝수 출력
let n2 = 1;
while(n2 <= 10) {
  if(n2%2 === 0) {
    console.log(n2);
  }
  n2++;
}
console.log('반복문 끝');

// case4. 10부터 1까지 홀수 출력
let n3 = 10;
while(n3 >= 1) {
  if(n3%2 !== 0) {
    console.log(n3);
  }
  n3--;
}
console.log('반복문 끝');

// 무한 루프
// - 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한 루프를 만들어 특정 조건이 만족될 때까지 반복되는 코드를 작성하기도 함

/*
  while (true) {
    ...
    // 탈출 조건 만들기
  }
*/

// 조건문 등을 이용해 탈출 조건을 만들어 주고 break 키워드 -> 블록 ({})을 빠져나옴

// let go = confirm('계속 진행할까요?');
// console.log(go);
// 확인 : true
// 취소 : false

let count = 0;
while(true) { // 무한 루프
  if(confirm('계속 진행할까요?') === true) { // 확인 true 반환
    alert(count+ '번째 반복입니다!');
    count++;
  } else { // 취소 false 반환
      break;
  }
}
console.log('무한 루프 탈출 성공');