// 구조 분해 할당

// 1. 배열 구조 분해
// - 순서가 중요
// - 변수의 순서와 요소의 순서가 일치해야 함
// - 없는 값은 undefined
// - 기본 값 설정 가능
const lists = ["apple", "grape"];
[item1, item2, item3 = "peach"] = lists;
console.log("item1: ", item1);
console.log("item2: ", item2);
console.log("item3: ", item3);

// Swap : 두 변수의 값 교환
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("x: ", x);
console.log("y: ", y);
