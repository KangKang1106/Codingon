// 문자열 속성과 메서드(함수)
// - 자바스크립트에서 기본 제공하는 문자열(string)에서 사용 가능한 편리한 기능

// 속성
// length : 문자의 길이
var song = "Strawberry Moon";
var song1 = "Strawberry Moon!!!";

console.log(song.length); // song 변수의 문자열 길이
console.log(song1.length); // song1 변수의 문자열 길이

// XX.method() 형태
// - toUpperCase() : 대문자로 변경
// - toLowerCase() : 소문자로 변경
// - trim() : 양 끝 공백 제거
var msg = 'Happy BirthDay~';
var userId = '      user123';

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length); // 13
console.log(userId.trim());
console.log(userId.trim().length); // 7

// 참고! 연달아서 사용 가능
var msg2 = '  hello world !!        ';
console.log(msg2.trim().toUpperCase());
// msg2 변수의 양끝 공백 제거 및 대문자로 변경
console.log(msg2.trim().toUpperCase().length);


// indexing
// - string에서 한 글자를 선택
// - 변수명[위치값]
// - 위치값 : 숫자 0부터 시작
console.log(song); // Strawberry Moon
console.log(song[0]); // 첫글자 : 컴퓨터는 항상 0부터 숫자를 시작
console.log(song[1]);
console.log(song[2]);
console.log(typeof(song[2])); // string 자료형
console.log(song[0]+song[7]); // S+r
console.log(song[0].length); // 1
console.log(song[0].toLowerCase()); // s

// 퀴즈) Sonny 단어 만들기
console.log(song[0]+song[13]+song[14]+song[14]+song[9]);


// XX.method(arg) 형태
// - indexOf(x) : string에서 x가 나타내는 인덱스(위치값)를 반환
//              : 가 없다면 -1 반환
// - slice(startIndex) : stratIndex 부터 끝까지 문자열을 잘라내어 반환
// - replace(교체될 값, 교체되어 들어가는 값) : 처음 발견한 값을 교체
// - replaceAll(교체될 값, 교체되어 들어가는 값) : 발견한 값을 모두 찾아서 교체

var fruit = 'applemango';
var msg = 'Wow~ It is so amazing~~~~!!';

console.log(fruit.indexOf('a')); // 0
console.log(fruit.indexOf('l')); // 3
console.log(fruit.indexOf('mango')); // 5
console.log(fruit.indexOf('x')); // -1

console.log(fruit.slice(5)); // mango
console.log(fruit.slice(-1)); // o : index 번호는 음수도 가능
console.log(fruit.slice(-3)); // -3 ~ -1 : ngo

console.log(msg.replace('Wow', 'Hey'));
console.log(msg.replaceAll('a', 'A'));

// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26
let date = '2022.9.26';
console.log(date.replaceAll('.','-'));
console.log(date.replaceAll('.','-').slice(-7));