let america = document.querySelector('.america');
let listAmerica = document.querySelector('.listAmerica');
let usa = document.querySelector('.usa');
let themeparkUSA = document.querySelector('.themeparkUSA');
let brazil = document.querySelector('.brazil');
let themeparkBrazil = document.querySelector('.themeparkBrazil');

let asia = document.querySelector('.asia');
let listAsia = document.querySelector('.listAsia');
let vietnam = document.querySelector('.vietnam');
let themeparkVietnam = document.querySelector('.themeparkVietnam');
let japan = document.querySelector('.japan');
let themeparkJapan = document.querySelector('.themeparkJapan');
let china = document.querySelector('.china');
let themeparkChina = document.querySelector('.themeparkChina');
let korea = document.querySelector('.korea');
let themeparkKorea = document.querySelector('.themeparkKorea');

let europe = document.querySelector('.europe');
let listEurope = document.querySelector('.listEurope');
let netherlands = document.querySelector('.netherlands');
let themeparkNetherlands = document.querySelector('.themeparkNetherlands');
let denmark = document.querySelector('.denmark');
let themeparkDenmark = document.querySelector('.themeparkDenmark');
let germany = document.querySelector('.germany');
let themeparkGermany = document.querySelector('.themeparkGermany');
let romania = document.querySelector('.romania');
let themeparkRomania = document.querySelector('.themeparkRomania');
let spain = document.querySelector('.spain');
let themeparkSpain = document.querySelector('.themeparkSpain');
let uk = document.querySelector('.uk');
let themeparkUK = document.querySelector('.themeparkUK');
let france = document.querySelector('.france');
let themeparkFrance = document.querySelector('.themeparkFrance');

let middleEast = document.querySelector('.middleEast');
let listMiddleEast = document.querySelector('.listMiddleEast');
let dubai = document.querySelector('.dubai');
let themeparkDubai = document.querySelector('.themeparkDubai');
let arab = document.querySelector('.arab');
let themeparkArab = document.querySelector('.themeparkArab');

let oceania = document.querySelector('.oceania');
let listOceania = document.querySelector('.listOceania');
let australia = document.querySelector('.australia');
let themeparkAustralia = document.querySelector('.themeparkAustralia');


let xBtn1 = document.querySelector('.xBtn1');
let xBtn2 = document.querySelector('.xBtn2');
let xBtn3 = document.querySelector('.xBtn3');
let xBtn4 = document.querySelector('.xBtn4');
let xBtn5 = document.querySelector('.xBtn5');

let usaText = document.querySelector('#usaText');
let arabText = document.querySelector('#arabText');
let japanText = document.querySelector('#japanText');
let chinaText = document.querySelector('#chinaText');
let koreaText = document.querySelector('#koreaText');
let germanyText = document.querySelector('#germanyText');
let ukText = document.querySelector('#ukText');
let australiaText = document.querySelector('#australiaText');
let dubaiText = document.querySelector('#dubaiText');
let brazilText = document.querySelector('#brazilText');
let vietnamText = document.querySelector('#vietnamText');
let denmarkText = document.querySelector('#denmarkText');
let spainText = document.querySelector('#spainText');
let franceText = document.querySelector('#franceText');
let netherlandsText = document.querySelector('#netherlandsText');
let romaniaText = document.querySelector('#romaniaText');

let countryText = document.querySelector('.countryText');
let hidden = document.querySelector('.hidden');

let dropdown = document.querySelector('.dropdown');

america.addEventListener('mouseover', function() {
  listAmerica.style.display = 'block';
  listAsia.style.display = 'none';
  listEurope.style.display = 'none';
  listMiddleEast.style.display = 'none';
  listOceania.style.display = 'none';
});
usa.addEventListener('mouseover', function() {
  themeparkUSA.style.display = 'block';
  usaText.textContent = '미국\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
usa.addEventListener('mouseout', function() {
  themeparkUSA.style.display = 'none';
  usaText.innerText = '미국';
});
brazil.addEventListener('mouseover', function() {
  themeparkBrazil.style.display = 'block';
  brazilText.textContent = '브라질\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
brazil.addEventListener('mouseout', function() {
  themeparkBrazil.style.display = 'none';
  brazilText.innerText = '브라질';
});
xBtn1.addEventListener('click', function() {
  listAmerica.style.display = 'none';
});

asia.addEventListener('mouseover', function() {
  listAsia.style.display = 'inline-block';
  listAmerica.style.display = 'none';
  listEurope.style.display = 'none';
  listMiddleEast.style.display = 'none';
  listOceania.style.display = 'none';
});
vietnam.addEventListener('mouseover', function() {
  themeparkVietnam.style.display = 'inline-block';
  vietnamText.textContent = '베트남\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
vietnam.addEventListener('mouseout', function() {
  themeparkVietnam.style.display = 'none';
  vietnamText.innerText = '베트남';
});
japan.addEventListener('mouseover', function() {
  themeparkJapan.style.display = 'inline-block';
  japanText.textContent = '일본\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
japan.addEventListener('mouseout', function() {
  themeparkJapan.style.display = 'none';
  japanText.innerText = '일본';
});
china.addEventListener('mouseover', function() {
  themeparkChina.style.display = 'inline-block';
  chinaText.textContent = '중국\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
china.addEventListener('mouseout', function() {
  themeparkChina.style.display = 'none';
  chinaText.innerText = '중국';
});
korea.addEventListener('mouseover', function() {
  themeparkKorea.style.display = 'inline-block';
  koreaText.textContent = '한국\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
korea.addEventListener('mouseout', function() {
  themeparkKorea.style.display = 'none';
  koreaText.innerText = '한국';
});
xBtn2.addEventListener('click', function() {
  listAsia.style.display = 'none';
});

europe.addEventListener('mouseover', function() {
  listEurope.style.display = 'inline-block';
  listAmerica.style.display = 'none';
  listAsia.style.display = 'none';
  listMiddleEast.style.display = 'none';
  listOceania.style.display = 'none';
});
netherlands.addEventListener('mouseover', function() {
  themeparkNetherlands.style.display = 'inline-block';
  netherlandsText.textContent = '네덜란드\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
netherlands.addEventListener('mouseout', function() {
  themeparkNetherlands.style.display = 'none';
  netherlandsText.innerText = '네덜란드';
});
denmark.addEventListener('mouseover', function() {
  themeparkDenmark.style.display = 'inline-block';
  denmarkText.textContent = '덴마크\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
denmark.addEventListener('mouseout', function() {
  themeparkDenmark.style.display = 'none';
  denmarkText.innerText = '덴마크';
});
germany.addEventListener('mouseover', function() {
  themeparkGermany.style.display = 'inline-block';
  germanyText.textContent = '독일\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
germany.addEventListener('mouseout', function() {
  themeparkGermany.style.display = 'none';
  germanyText.innerText = '독일';
});
romania.addEventListener('mouseover', function() {
  themeparkRomania.style.display = 'inline-block';
  romaniaText.textContent = '루마니아\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
romania.addEventListener('mouseout', function() {
  themeparkRomania.style.display = 'none';
  romaniaText.innerText = '루마니아';
});
spain.addEventListener('mouseover', function() {
  themeparkSpain.style.display = 'inline-block';
  spainText.textContent = '스페인\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
spain.addEventListener('mouseout', function() {
  themeparkSpain.style.display = 'none';
  spainText.innerText = '스페인';
});
uk.addEventListener('mouseover', function() {
  themeparkUK.style.display = 'inline-block';
  ukText.textContent = '영국\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
uk.addEventListener('mouseout', function() {
  themeparkUK.style.display = 'none';
  ukText.innerText = '영국';
});
france.addEventListener('mouseover', function() {
  themeparkFrance.style.display = 'inline-block';
  franceText.textContent = '프랑스\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
france.addEventListener('mouseout', function() {
  themeparkFrance.style.display = 'none';
  franceText.innerText = '프랑스';
});
xBtn3.addEventListener('click', function() {
  listEurope.style.display = 'none';
});

middleEast.addEventListener('mouseover', function() {
  listMiddleEast.style.display = 'inline-block';
  listAmerica.style.display = 'none';
  listAsia.style.display = 'none';
  listEurope.style.display = 'none';
  listOceania.style.display = 'none';
});
dubai.addEventListener('mouseover', function() {
  themeparkDubai.style.display = 'inline-block';
  dubaiText.textContent = '두바이\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
dubai.addEventListener('mouseout', function() {
  themeparkDubai.style.display = 'none';
  dubaiText.innerText = '두바이';
});
arab.addEventListener('mouseover', function() {
  themeparkArab.style.display = 'inline-block';
  arabText.textContent = '아랍에미리트\u00a0>';
});
arab.addEventListener('mouseout', function() {
  themeparkArab.style.display = 'none';
  arabText.innerText = '아랍에미리트';
});
xBtn4.addEventListener('click', function() {
  listMiddleEast.style.display = 'none';
});

oceania.addEventListener('mouseover', function() {
  listOceania.style.display = 'inline-block';
  listAmerica.style.display = 'none';
  listAsia.style.display = 'none';
  listMiddleEast.style.display = 'none';
  listEurope.style.display = 'none';
});
australia.addEventListener('mouseover', function() {
  themeparkAustralia.style.display = 'inline-block';
  australiaText.textContent = '호주\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0>';
});
australia.addEventListener('mouseout', function() {
  themeparkAustralia.style.display = 'none';
  australiaText.innerText = '호주';
});
xBtn5.addEventListener('click', function() {
  listOceania.style.display = 'none';
});