let cultureType = document.querySelector('.cultureType')
let season = document.querySelector('.season');
let time = document.querySelector('.time');
let questionContainer = document.querySelector('questionContainer');
let questionCard1 = document.querySelector('.questionCard1');
let questionCard2 = document.querySelector('.questionCard2');
let questionCard3 = document.querySelector('.questionCard3');
let search = document.querySelector('.search');
let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let questionCardText1 = document.querySelector('.questionCard-text1');
let questionCardText2 = document.querySelector('.questionCard-text2');
let questionCardText3 = document.querySelector('.questionCard-text3');
let icon = document.querySelector('.icon');


search.addEventListener('click', function() {
    $(".questionCard2").fadeIn();
    $(".questionCard3").fadeIn();
    image1.setAttribute('src','/static/image/question2.png');
    questionCardText1.innerText='카드를 터치해 주세요';
    questionCard1.classList.add('front');
    questionCard1.classList.remove('back');
    questionCard1.addEventListener('click', function() {
    questionCard1.classList.remove('front');
    questionCard1.classList.add('back');
    setTimeout(function () {
      if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='낮') {
        image1.setAttribute('src','/static/image/1. spring/Zurich.png');
        questionCardText1.innerText='중세 시대의 노동 종료를 알리는 종소리에서 유래된 것으로 오후 6시를 알리는 종소리 라는 의미를 가진 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='밤') {
        image1.setAttribute('src','/static/image/1. spring/AoDai.png');
        questionCardText1.innerText='호찌민시의 가장 큰 연례 곤광문화 행사를 홍보하고 문화를 소개하는 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='낮') {
        image1.setAttribute('src','/static/image/2. summer/Santiago.jpg');
        questionCardText1.innerText='어업 종사자들이 그들의 성인을 기리고 자신들의 풍요와 안녕을 기원하는 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='밤') {
        image1.setAttribute('src','/static/image/2. summer/Edinburgh.png');
        questionCardText1.innerHTML='제 2차 세계대전으로 상처받은 국민들을 치유하기 위한 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='낮') {
        image1.setAttribute('src','/static/image/3. autumn/Munich.jpg');
        questionCardText1.innerText='독일의 맥주와 각종 특산물을 즐길 수 있는 10월의 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='밤') {
        image1.setAttribute('src','/static/image/3. autumn/MexicoCity.jpg');
        questionCardText1.innerText='10월 말에서 11월 초에 세상을 떠난 가족이나 친지를 기리며 그들의 명복을 비는 명절';
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='낮') {
        image1.setAttribute('src','/static/image/4. winter/Winterlicious.jpg');
        questionCardText1.innerText='200개가 넘는 유명 레스토랑에서 합리적인 가격으로 애피타이저-메인-코스 메뉴를 즐길 수 있는 겨울 음식 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='밤') {
        image1.setAttribute('src','/static/image/4. winter/carnival.jpg');
        questionCardText1.innerText='엄청난 규모의 퍼레이드와 삼바 연주, 열정적인 댄서들의 춤과 거대한 수레를 볼 수 있는 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='낮') {
        image1.setAttribute('src','/static/image/1. spring/hawai.jpg');
        questionCardText1.innerText='아시아 태평양 지역과 하와이의 문화 교류를 목적으로 매년 열리는 하와이 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='밤') {
        image1.setAttribute('src','/static/image/1. spring/CapeTown.jpg');
        questionCardText1.innerText='세계 4위의 재즈 페스티벌이자 아프리카 대륙 최대의 재즈 페스티벌';
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='낮') {
        image1.setAttribute('src','/static/image/2. summer/Osaka.png');
        questionCardText1.innerText='7월 24일과 25일에 오사카 텐만구신사를 중심으로 열리는 민속 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='밤') {
        image1.setAttribute('src','/static/image/2. summer/Sydney.png');
        questionCardText1.innerText='호주에서 열리는 세계 최대 빛 축제 중 1개인 비비드 시드니 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='낮') {
        image1.setAttribute('src','/static/image/3. autumn/Beijing.jpg');
        questionCardText1.innerText='오페라, 관현악, 솔로, 합창 등 다양한 클래식 및 재즈 음악을 제공하는 약 30개의 콘서트 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='밤') {
        image1.setAttribute('src','/static/image/3. autumn/Zermatt.jpg');
        questionCardText1.innerText='마테호른 기슭에서 만든 전통을 따라 음악 제작에 전 세계의 젊은 음악가들이 초대하기 위한 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='겨울'&time.value=='낮') {
        image1.setAttribute('src','/static/image/4. winter/SnowFestival.png');
        questionCardText1.innerText='약 200만명이 찾는 세계적인 축제로 눈으로 만든 조각 6개를 오도리 공원에서 진행되는 축제';
      }
      else if (cultureType.value=='문화예술'&season.value=='겨울'&time.value=='밤') {
        image1.setAttribute('src','/static/image/4. winter/balldrop.png')
        questionCardText1.innerText='뉴욕 타임스 스퀘어 건물에 위치한 볼 모형인 타임스 스퀘어 볼을 12월31일 오후 신년이 되는 순간 43m 아래로 내리는 행사';
      }
    }, 850);
  });
  image2.setAttribute('src','/static/image/question2.png');
  questionCardText2.innerText='카드를 터치해 주세요';
  questionCard2.classList.add('front');
  questionCard2.classList.remove('back');
  questionCard2.addEventListener('click', function() {
    questionCard2.classList.remove('front');
    questionCard2.classList.add('back');
    setTimeout(function () {
      if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='낮') {
        image2.setAttribute('src','/static/image/1. spring/Cancun.png');
        questionCardText2.innerText='멕시코가 1862년 5월 5일 푸에블라 전투에서 프랑스 제국을 물리친 것을 기념하는 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='밤') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='낮') {
        image2.setAttribute('src','/static/image/2. summer/Marrakech.jpg');
        questionCardText2.innerText='모로코의 음악적 예술적 문화를 보호하는 차원에서 매년 엘바디 궁전에서 성대하게 치러지는 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='밤') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='낮') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='밤') {
        image2.setAttribute('src','/static/image/3. autumn/Thailand.jpg');
        questionCardText2.innerText='힌두교의 갠지스 강에 대한 미안함과 고마움에서 유래한 것으로 태국인의 물에 대한 고마움과 미안함을 표현하기 위한 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='낮') {
        image2.setAttribute('src','/static/image/4. winter/PerfumePagoda.png');
        questionCardText2.innerText='큰 불교 축제가 열리고 부처님의 열반에 이르신 날인 열반 일에 흐엉사를 방문하면, 동굴 속을 가득 채운 종유석과 석순이 기적과 행운을!';
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='밤') {
        image2.setAttribute('src','/static/image/4. winter/father.png');
        questionCardText2.innerText='매년 12월 5일은 아버지의 날로 태국에서는 마리 라는 꽃을 달아드리며 감사의 마음을 전하는 행사';
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='낮') {
        image2.setAttribute('src','/static/image/1. spring/Keukenhof.jpg');
        questionCardText2.innerText='매년 3월 중순에서 5월 중순까지 네덜란드에서 열리는 전 세계에서 가장 큰 튤립 정원에서 열리는 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='밤') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='낮') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='밤') {
        image2.setAttribute('src','/static/image/2. summer/Montreal.png');
        questionCardText2.innerText='약 200만 명이 찾아오는 세계 최대 규모의 재즈 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='낮') {
        image2.setAttribute('src','/static/image/3. autumn/Canberra.jpg');
        questionCardText2.innerText='백만 송이가 넘는 각양각색의 꽃들로 수놓아진 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='밤') {
        image2.setAttribute('src','/static/image/3. autumn/Amsterdam.jpg');
        questionCardText2.innerText='암스테르담에서 5일 동안 진행되는 일렉트로닉 댄스 음악계를 대표하는 글로벌 이벤트';
      }
      else if(cultureType.value=='문화예술'&season.value=='겨울'&time.value=='낮') {
        $('.questionCard2').fadeOut( "slow" );
      }
      else if (cultureType.value=='문화예술'&season.value=='겨울'&time.value=='밤') {
        image2.setAttribute('src','/static/image/4. winter/lantern.png');
        questionCardText2.innerText='뉴질랜드에서 가장 큰 축제로 음력 새해에 해당하는 기간에 열리는데 수많은 랜턴이 오클랜드 도메인 일대를 화려하게 장식';
      }
    }, 850);
  });
  image3.setAttribute('src','/static/image/question2.png');
  questionCardText3.innerText='카드를 터치해 주세요';
  questionCard3.classList.add('front');
  questionCard3.classList.remove('back');
  questionCard3.addEventListener('click', function() {
    questionCard3.classList.remove('front');
    questionCard3.classList.add('back');
    setTimeout(function () {
      if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='낮') {
        image3.setAttribute('src','/static/image/1. spring/Granada.jpg');
        questionCardText3.innerText='콘스탄티노플의 황후 헬레나(Helena)가 그리스도의 참 십자가를 발견한 것을 기념하기 위한 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='봄'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='낮') {
        image3.setAttribute('src','/static/image/2. summer/Madrid.png');
        questionCardText3.innerText='열정의 나라 스페인의 매력을 한껏 느낄 수 있는 투우와 토마토 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='여름'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='낮') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='가을'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='낮') {
        image3.setAttribute('src','/static/image/4. winter/LasParrandas.png');
        questionCardText3.innerText='빛과 색, 형태를 이용해서 이야기를 재창조, 재현하며 상상력과 창의력을 표현한 기념물, 수레, 레플리카 등의 화려한 작품을 선보이는 축제';
      }
      else if(cultureType.value=='전통문화'&season.value=='겨울'&time.value=='밤') {
        image3.setAttribute('src','/static/image/4. winter/sanghai.jpg');
        questionCardText3.innerText='상하이 유명 관광지인 예원에서 초대형 등불 모형을 볼 수 있는 축제';
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='낮') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='봄'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='낮') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='여름'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='낮') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='가을'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if(cultureType.value=='문화예술'&season.value=='겨울'&time.value=='낮') {
        $('.questionCard3').fadeOut( "slow" );
      }
      else if (cultureType.value=='문화예술'&season.value=='겨울'&time.value=='밤') {
        $('.questionCard3').fadeOut( "slow" );
      }
    }, 850);
  });
});
