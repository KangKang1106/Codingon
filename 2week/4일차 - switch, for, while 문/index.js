// switch 문
// - 하나 이상의 case 문으로 구성
// - default 문이 있는데 필수는 아님 -> 작성 권장
// -break 키워드 ; 블록(중괄호, {})을 빠져나갈 때 사용하는 키워드

// switch 문의 기본 구조
/*
switch(x) {
  case 값: // if (x === 값)
    // x가 값과 같을 때 실행할 문장
  break; // x가 값과 같을때의 문장을 실행 -> 블록을 빠져나옴
  case 값2: // if (x === 값2)
    // x가 값2와 같을 때 실행할 문장
    break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴
  default: // else
    // x가 case에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장
    break; // 블록을 빠져나옴
}
*/

let a = 2+2; // typeof -> number
switch(a) {
  case 3:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 4:
    console.log('비교하려는 값과 일치합니다.');
    break;
  case 5:
    console.log('비교하려는 값보다 큽니다.');
    break;
  default:
    console.log('어떤 갑인지 파악 안됨');
    break;
}

// 퀴즈) switch 문으로 작성
var grade = 'A'
switch(grade) {
  case 'A':
    console.log('A');
    break;
  case 'B':
    console.log('B');
    break;
  case 'C':
    console.log('C');
    break;
  case 'D':
    console.log('D');
    break;
  case 'F':
    console.log('F');
    break;
  default:
    console.log('오류 발생');
    break;
}

// 여러 개의 case 문을 묶을 수 있음
a = 6;
switch(a) {
  case 1:
  case 2:
  case 3:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 4:
    console.log('비교하려는 값과 일치합니다.');
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log('비교하려는 값보다 큽니다.');
    break;
  default:
    console.log('어떤 갑인지 파악 안됨');
    break;
}

//  삼항 연산자
// - 3개의 피연산자를 필요로 함
// 조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

// 짝홀 구별
var num = 3;
if (num % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

// 짝홀 구별 (ver. 삼항 연산자)
var result = (num % 2 === 0) ? '짝수' : '홀수';
console.log(result);
// console.log((num % 2 === 0) ? '짝수' : '홀수');
console.log(3 > 1 ? 'bigger' : 'smaller');

// 퀴즈 현재 시간을 입력 받는 변수 hour 선언
// 삼항 연산자를 이용해 hour 시간에 따라 오전/오후를 출력하기
let hour = 11;
console.log((hour > 0 && hour < 13) ? '오전' : '오후');