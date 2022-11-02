// #1 promise
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
// 성공이나 실패의 최종 결과를 알려줌
// - fulfilled (resolve) : 성공
// - rejected (reject) : 실패

// promise 객체를 반환하는 promise1 함수 정의
// function promise1(flag) {
//   return new Promise(function(resolve, reject) {
//     if(flag === true) {
//       resolve(`promise 상태는 fulfilled then()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`); // true (성공)
//       // resolve -> then 으로 연결
//     } else {
//       reject(`promise 상태는 rejected catch()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`); // false (실패)
//       // reject -> catch 로 연결
//     }
//   });
// }

// promise1(5>3) // true, false, 5>3(true)
//   .then(function(result) {
//   console.log(result);
//   })
//   .catch(function(err) {
//   console.log(err);
//   });


// #2 promise 사용법
// index.js 에서 "콜백함수"를 이용해 동기처리한 것을 promise를 이용해 동기처리 진행
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink() {
//   return new Promise(function (resolve,reject) {
//     // setTimeout() 비동기 처리 -> 동기처리 하기 위해 promise로 감싸기
//     setTimeout(function() {
//       console.log('고민 끝');
//       product = '제로 콜라';
//       price = 4000; // 2000, 4000
//       // resolve();
//       // reject 도 사용할 경우
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`${product} 제품의 가격은 ${price}이다.`);
// }
// function nopay() {
//   console.log(`${product} 제품의 가격은 ${price}이다. 안산다.`);
// }

// let product;
// let price;
// goMart();
// pickDrink().then(pay).catch(nopay);

// #3 promise 체이닝
// ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산
// add -> mul -> sub 순으로 연산 필요

// step1. 콜백함수 사용

// function add(n1, n2, callback) {
//   setTimeout(function() {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function() {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function() {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, function(x) {
//   console.log('1: ', x);
//   mul(x, function(y) {
//     console.log('2: ', y);
//     sub(y, function(z) {
//       console.log('3: ', z);
//     });
//   });
// });


// step2. promise 체이닝 사용
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      let result = n - 1;
      // resolve(result);
      reject(new Error('의도적으로 에러 시도'));
    }, 500);
  });
}

add(4, 3).then(function(result) {
  console.log('1: ', result);
  return mul(result);
})
.then(function(result) {
  console.log('2: ', result);
  return sub(result);
})
.then(function(result) {
  console.log('3: ', result);
})
.catch(function(err) {
  console.log('실패');
  console.log(err);
});