// val()
// input value 가져오기 / 설정하기
function getValue() {
  let value = $('.input1').val();
  alert(value);
}

function setValue() {
  $('.input1').val('설정 완료');
}

// css()
function changeCssJs() {
  let span = document.querySelector('.span1');
  span.style = 'font-size: 20px; color: red;';
}

function changeCssJquery() {
  // 단일 설정
  $('span').css('font-size', '40px');
  $('span').css('color', 'blue');

  // 복합 설정
  // $('span').css({
  //   'font-size': '40px',
  //   'color': 'blue'
  // });
}

function getCssJquery() {
  console.log($('.span1').css('color'));
}

// attr()
function changeAttrJs() {
  let a = document.querySelector('a');
  a.setAttribute('href', 'https://www.naver.com');
}

function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJs() {
  let p = document.querySelector('.p-text');
  p.textContent = 'js로 바꿨습니다'; // p.innerText
}

function changeTextJquery() {
  $('.p-text').text('jquery로 바꿨습니다');
}

// html()
function changeHtmlJs() {
  let p = document.querySelector('.p-html');
  p.innerHTML = '<h1>js로 바꿨습니다</h1>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery로 바꿨습니다</h3>');
}

// 요소 추가하기
// append()
function appendJs() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = '마지막 자식으로 추가된 js';

  ul.append(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
}
// prepend()
function prependJs() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = '첫번째 자식으로 추가된 js';

  ul.prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫번째 자식으로 추가된 jquery</li>');

  // let ul = $('.colors');
  // ul.prepend('<li>마지막 자식으로 추가된 jquery</li>');
}

// before()
function beforeJs() {
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = '이전 형제 요소로 추가된 js';

  green.before(li);
}

function beforeJquery() {
  $('.green').before('<li>이전 형제 요소로 추가된 jquery</li>');
}

// after()
function afterJs() {
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = '이후 형제 요소로 추가된 js';

  green.after(li);
}

function afterJquery() {
  $('.green').after('<li>이후 형제 요소로 추가된 jquery</li>');
}

// 요소 삭제하기
// remove()
function removeJs() {
  document.querySelector('#li2').remove();
}

function removeJquery() {
  $('#li2').remove();
}
// empty()
function emptyJs() {
  // document.querySelector('ul.nums').empty(); error 발생
  // js는 empty() 속성이 존재하지 않으므로 innerHtml 속성 사용
  document.querySelector('ul.nums').innerHTML = '';
}

function emptyJquery() {
  $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
  console.log($('.child2').parent());
}

function findParents() {
  console.log($('.child2').parents());
}

function findNext() {
  console.log($('.child2').next());
}

function findPrev() {
  console.log($('.child2').prev());
}

function findChildren() {
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  $('#hi').addClass('fs-50');
}

function removeClass() {
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  $('#hi').toggleClass('bg-pink');
}