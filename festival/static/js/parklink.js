let disneypark = document.querySelector('.disneypark');
let animal = document.querySelector('.animal');
let universal = document.querySelector('.universal');
let beto = document.querySelector('.beto');
let binpear = document.querySelector('.binpear');
let disneyc = document.querySelector('.disneyc');
let jibry = document.querySelector('.jibry');
let changrong = document.querySelector('.changrong');
let ever = document.querySelector('.ever');
let ftelling = document.querySelector('.ftelling');
let lego = document.querySelector('.lego');
let tiboly = document.querySelector('.tiboly');
let europark = document.querySelector('.europark');
let salina = document.querySelector('.salina');
let portu = document.querySelector('.portu');
let harrypoter = document.querySelector('.harrypoter');
let puydufou = document.querySelector('.puydufou');
let global = document.querySelector('.global');
let ferari = document.querySelector('.ferari');
let siworld = document.querySelector('.siworld');
let parkImage = document.querySelector('.parkImage');
let parkName = document.querySelector('.parkName');
let parkText = document.querySelector('.parkText');
let youtube = document.querySelector('.youtube');
let homepage = document.querySelector('.homepage');



disneypark.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/Disney.png');
  parkName.innerText = '디즈니 파크';
  parkText.innerText = '1955년 7월 17일에 개장한, 세계 최초의 테마파크이자 최초의 디즈니랜드다. 영국 BBC에서 죽기 전에 가봐야 할 50곳 중 3위로 선정했다. 어린이들의 꿈을 이뤄주는 장소로, 특히 디즈니 공주 캐릭터를 좋아하는 어린 여자아이들에게는 가보는 게 소원일 정도.그야말로 아이들의 로망. 디즈니랜드의 성공으로 디즈니사는 올랜도와 도쿄, 파리, 홍콩, 상하이 등지에도 디즈니랜드 리조트를 건설하였다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=zvcag08s3ng');
  homepage.setAttribute('href', 'https://disneyland.disney.go.com/destinations/disneyland/?CMP=OKC-330339_GM_DLR_destination_disneylandpark_NA');
})

animal.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/animal.png');
  parkName.innerText = '애니멀 킹덤';
  parkText.innerText = '애니멀 킹덤은 대부분 동물들과 자연, 열대숲을 이미지로 꾸민것 같다. 디즈니 입장권이나, 디즈니 밴드가 있어야지 들어갈 수 있다. 들어가면 가장 먼저 보이는 것은 생명의 나무인데, 라이온 킹에 나오는 생명에 나무라고 한다. 동물원같은 곳도 있어서 침팬지같은 동물들을 볼 수 있다. 이 곳은 원래도 더워서, 겨울에도 무척얇은 걷옷이라던지, 더위를 많이 타는 사람은 아예 안 들고와도 되고, 추위를 많이타는 사람들은 가디건같은 약간 얇은 가디건을 챙겨가는 것이 좋다. 먹거리도 많고, 재미있는 놀이기구들과 멋진 공연들이 많아 먹거리도 사먹고, 관광도 하기 좋은 곳이다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=1n2--YjH-Ts');
  homepage.setAttribute('href', 'https://disneyworld.disney.go.com/destinations/animal-kingdom/?CMP=OKC-80007823_GM_WDW_destination_disneysanimalkingdomthemepark_NA');
});

universal.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/universal.png');
  parkName.innerText = '유니버셜';
  parkText.innerText = '하루종일 숨막히는 액션을 테마 파크에서 즐길 수 있는 멋진 기회! 스릴 넘치는 테마 파크 라이드 및 공연, 로스앤젤레스 최고의 쇼핑상가, 레스토랑, 그리고 영화관이 있는 CityWalk까지! 유니버셜 스튜디오 할리우드는 가족 모두가 즐길 수 있는 환상적인 곳이랍니다!';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=iFLB0LgfZSs');
  homepage.setAttribute('href', 'https://www.universalstudioshollywood.com/web/en/us?utm_source=google&utm_medium=organic&utm_campaign=GMB');
});

beto.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/beto.png');
  parkName.innerText = '베토 카레로 월드';
  parkText.innerText = '브라질 펜하에 위치한 베토 카레로 월드는 라틴 아메리카에서 가장 큰 테마 파크로 쇼와, 놀이기구들, 동물원이 있다고 합니다. 동물원에서는 호랑이, 사자, 영장류 등을 만나보실 수 있습니다. 또한 국민의 거리, 독일 마을, 옛 서부, 해적의 섬, 기막힌 모험, 환상의 나라, 자동차 단지가 있습니다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=7aGhKfJi6eg');
  homepage.setAttribute('href', 'https://www.betocarrero.com.br/');
});

binpear.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/binpear.png');
  parkName.innerText = '빈펄랜드';
  parkText.innerText = '빈펄랜드는 단지 놀이동산을 말하지 않습니다. 아찔한 탈것들로 구성된 Amusement Park 뿐 아니라 워터파크, 수족관, 열대 정원등 다양한 즐거움이 있습니다. 이 모든 것을 한번에 즐기세요!';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=FeI9996tx_k');
  homepage.setAttribute('href', 'https://enjoyvinpearl.com/land');
});

disneyc.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/disneyc.png');
  parkName.innerText = '도쿄 디즈니씨';
  parkText.innerText = '세계에서 11번째로 개장한 디즈니 테마파크로 40억 달러 이상의 건설비를 들여 2001년 개장했다. 월트디즈니사의 테마파크 라이선스를 가지고 있는 오리엔탈랜드 컴퍼니가 도쿄 디즈니랜드와 함께 소유하고 있다. 도쿄 디즈니랜드 바로 옆에 붙어 있고 시설이나 운영은 비슷하지만 자유롭게 왕래할 수 없다. 주요 시설로는 아메리칸 워터프런트, 포트 디스커버리, 로스트 리버 델타, 아라비안 코스트, 머메이드 라군, 미스테리어스 아일랜드, 메디테러니언 하버 등 바다를 주제로 한 7개의 테마 항구가 있고, 공포의 탑 등의 어트랙션 및 쇼가 있다. 또한 식사, 쇼핑, 숙박, 양호실, 택배 등 다양한 시설을 갖추고 있다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=XaWgqsJnEYc');
  homepage.setAttribute('href', 'https://www.tokyodisneyresort.jp/tds/');
});

jibry.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/jibry.png');
  parkName.innerText = '지브리 파크';
  parkText.innerText = '하울의 움직이는 성과 같은 19세기 말 공상과학적 요소를 채용한 엘리베이터 동이 설치된다. 주변에는 귀를 기울이면의 골동품 가게를 재현한 건물도 설치한다. 모노노케 히메를 모티브로 한 모노노케 지역에는 타타라장을 모티브로 한 건물과 재앙신 오브제가 설치된다. 하울의 움직이는 성과 마녀 배달부 키키 그리고 아야와 마녀를 모티브로 한 마녀 계곡 지역에는 마법을 소재로 한 작품이 테마로 키키의 집과 아야의 집이 만들어질 예정이며 놀이공원도 만들어진다. 또한 기존에 있던 사츠키와 메이의 집도 정비되며 숲 산책로도 재정비한다고 한다. 2021년 기준으로 이웃집 토토로의 세계를 재현한 공간 등을 추가로 만들고있다. 공원 입장 비용은 무료, 시설 이용 금액은 유료로 책정될 예정이다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=8nX9WacA-qg');
  homepage.setAttribute('href', 'https://ghibli-park.jp/');
});

changrong.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/changrong.png');
  parkName.innerText = '창롱 오션 킹덤';
  parkText.innerText = '주하이 창롱 오션 킹덤에서 벨루가와 북극곰, 그리고 다양한 해양 동물들을 만나보세요. 더 놀라운 경험을 원하세요? 고래상어를 바라보며 잘 수 있다는 사실, 알고 계신가요? 세계에서 가장 큰 아쿠아리움에서 보내는 특별한 하룻밤! 즐거운 추억을 만들기에 더 없이 완벽한 곳이 될거에요. 창롱의 다양한 테마존들을 방문하고, 특별한 동물 전시도 즐겨보세요. 신나는 라이드와 공연도 놓치지 마세요. 지루할 틈이 없어요! 그리고 맛있는 음식도 잊으면 안돼요. 모든 가족들을 위한 다양한 레스토랑과 카페가 준비되어 있어요.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=af64VGkFEow');
  homepage.setAttribute('href', 'https://www.chimelong.com/');
});

ever.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/ever.png');
  parkName.innerText = '에버랜드';
  parkText.innerText = '1년 365일, 계절별 다채롭게 펼쳐지는 축제와 어트랙션, 동물, 식물 등 다양한 시설로 즐거운 휴식과 기쁨을 선사하는 테마파크이다. 5개 테마존의 40여종의 최신 어트랙션은 짜릿한 스릴을 선사하며 특히 우든코스터 T Express는 롤러코스터 마니아들에게 사랑받고 있다. 파크 곳곳에서 펼쳐지는 다양한 무대공연, 멀티미디어 불꽃쇼 등 초대형 엔터테인먼트가 날마다 새로운 즐거움을 더하며, 아시아 동물원 최초로 AZA (미국 동물원 수족관협회) 인증을 받은 에버랜드 동물원 주토피아에서는 사파리월드, 로스트밸리 등 수준높은 동물 생태 전시를 경험할 수 있다. 또한 40여년간 한국의 꽃 축제와 정원 문화를 선도해 온 에버랜드에서 튤립, 장미 등 아름다운 테마정원과 오감만족의 전시, 체험도 만나볼 수 있다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=jviVu7EpY18');
  homepage.setAttribute('href', 'https://www.everland.com/web/everland/main.html');
});

ftelling.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/ftelling.png');
  parkName.innerText = '에프텔링';
  parkText.innerText = '네덜란드 카슈벨에 있는 판타지 테마 의 놀이 공원 입니다 . 매력 은 고대 신화 와 전설 , 동화 , 우화 , 민속 의 요소 를 반영 합니다. 1952년 5월 31일에 개장한 공원으로 놀이터 와 동화의 숲 이 있는 자연공원 에서 본격적인 테마파크로 탈바꿈했습니다. 이제 6개의 롤러코스터 와 4개의 어두운 놀이기구 를 포함한 다양한 놀이기구 외에도 문화적, 낭만적, 향수를 불러일으키는 테마로 어린이와 성인 모두를 만족시킵니다. 네덜란드에서 가장 큰 테마파크이자 세계에서 가장 오래된 테마파크 중 하나입니다. 캘리포니아 에 있는 원래 디즈니랜드 공원 의 두 배 이며 3년 앞서 있습니다. 매년 공원에는 5백만 명이 넘는 방문객이 있습니다. 2020년에는 디즈니랜드 파크에 이어 유럽에서 가장 많이 방문한 테마파크입니다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=MF7HERV51A0');
  homepage.setAttribute('href', 'https://www.efteling.com/');
});

europark.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/europark.png');
  parkName.innerText = '유로파 파크';
  parkText.innerText = '유로파파크는 100개가 넘는 환상적인 쇼와 11개의 롤러코스터, 그리고 14가지의 유럽에 대한 주제로 이루어진 놀이공원이다. 독일 바덴뷔르템베르크주 루스트에 위치해 있다. 또한 파리에 위치한 디즈니랜드를 제외하고, 유럽에서 두 번째로 많은 방문객들이 찾는 곳이다. 독일의 가장 큰 4성 호텔 5개가 위치하고 있어, 많은 방문객들이 이 곳을 찾는다. 유럽 최대의 롤러코스터인 실버스타가 유명하다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=GvcXDuQWTRQ');
  homepage.setAttribute('href', 'https://www.europapark.de/en');
});

lego.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/lego.png');
  parkName.innerText = '레고랜드';
  parkText.innerText = '덴마크를 대표하는 국내 최대의 테마 파크. 전 세계에 6곳의 레고랜드가 있지만, 이곳은 1968년에 세워진 ‘원조’다. 스릴 있는 놀이기구보다 아기자기한 볼거리를 더 좋아한다면, 키덜트족을 비롯한 레고 마니아, 어린이를 동반한 가족 여행자라면 여기 만한 곳은 없다. 레고는 ‘잘 놀다’라는 뜻의 ‘Leg Godt’의 약자로, 1958년에 출시된 이래 반세기의 역사를 이어 오며 ‘세기의 발명품’으로 자리 잡으면서, 전 세계인들을 사로잡았다. 갓 돌이 지난 아기부터 마니아 어른들까지, 무한한 조합으로 전 세대를 아우르는 매력은 오늘도 많은 사람을 레고의 세계로 빠져들게 한다. 특히 레고랜드 곳곳에 만들어진 레고 모형을 보고 있노라면 레고무비 못지 않게 ‘레고의 세계에 불가능은 없다!’는 사실을 확실히 실감할 것이다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=Zh5M-RlacUE');
  homepage.setAttribute('href', 'https://www.legoland.dk/');
});

tiboly.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/tiboly.png');
  parkName.innerText = '티볼리 가든';
  parkText.innerText = '티볼리 공원은 덴마크 코펜하겐에 위치한 놀이공원이다. 코펜하겐 중앙역 건너편에 위치해 있는 어른들을 위한 공원이며 덴마크에서 가장 큰 놀이공원이다. 1843년 8월 15일에 개관했으며 공원 안에는 갖가지 문화 시설, 야외 음악당, 극장, 놀이기구가 있다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=YllauQagLPk');
  homepage.setAttribute('href', 'https://www.tivoli.dk/en/');
});

salina.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/salina.png');
  parkName.innerText = '살리나 투르다';
  parkText.innerText = '중세 시대부터 소금 광산으로 쓰이다 버려진 지하 120m의 살리나 투르다는 어느 전설에 흡혈귀의 고향으로도 나오던 루마니아에서도 특히 지하에 있는 박물관이다. 무시무시한 괴담의 고향답게 이 박물관은 엘리베이터를 타고 땅 속으로 들어가야 하는 입장부터가 모험이다. 하지만 무서워만할 필요는 없다. 이곳은 박물관 외에도 대관람차, 공연장, 문화시설, 놀이기구 등 다양한 시설을 갖추고 있기 때문에 어지간한 테마파크 규모를 자랑한다. 땅 속에 박물관이 존재할 수 있다는 것만으로도 놀라운 일이지만, 버려진 공간을 새롭게 보는 아이디어도 눈여겨 볼만하다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=BSRpoFZqz1o');
  homepage.setAttribute('href', 'https://www.salinaturda.eu/');
});

portu.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/portu.png');
  parkName.innerText = '포르트아벤투라';
  parkText.innerText = '잊을 수 없는 모험을 떠나보세요! 포르트아벤투라에서는 중국, 폴리네시아, 미국 서부, 멕시코, 지중해 및 세사모아벤투라와 같은 이국적인 장소들을 방문 할 수 있습니다. 그리고 각 지역에서 끝없는 명소, 쇼, 상점 및 테마 레스토랑을 탐험할 수도 있죠. 포르트아벤투라는 모든 스릴 중독자들을 기쁘게 할 스릴 넘치는 40 여개의 놀이기구를 제공합니다. 놀이기구 뿐만 아니라 캉캉 춤, 곡예, 폴리네시아 부족 춤 및 유머 등 매일 약 40 회의 쇼들을 즐길 수 있습니다. 또한 어린이들을 위한 놀이기구들도 준비되어있으니 가족들과 즐거운 추억을 만들어보세요!';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=OVRIF7EZyMA');
  homepage.setAttribute('href', 'https://www.portaventuraworld.com/en/portaventura');
});

harrypoter.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/harrypoter.png');
  parkName.innerText = '해리포터 스튜디오';
  parkText.innerText = '워너 브라더스 스튜디오 투어 런던 - 더 메이킹 오브 해리 포터는 잉글랜드 하트퍼드셔주 리브즈든에 있는 관광지이다. 워너 브라더스 스튜디오 리브즈든에 위치하고 있으며, 《해리 포터》 영화 시리즈를 테마로 하고 있다. 워너 브라더스 스튜디오 투어 런던은 세계에서 유일하게 영구적인 영화 제작 장소로, 2012년에 일반인에게 공개되었다. 각 투어 세션은 일반적으로 3시간 소요된다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=SMTNjD52064');
  homepage.setAttribute('href', 'https://www.wbstudiotour.co.uk/');
});

puydufou.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/puydufou.png');
  parkName.innerText = '퓌뒤푸';
  parkText.innerText = '워너 브라더스 스튜디오 투어 런던 - 더 메이킹 오브 해리 포터는 잉글랜드 하트퍼드셔주 리브즈든에 있는 관광지이다. 워너 브라더스 스튜디오 리브즈든에 위치하고 있으며, 《해리 포터》 영화 시리즈를 테마로 하고 있다. 워너 브라더스 스튜디오 투어 런던은 세계에서 유일하게 영구적인 영화 제작 장소로, 2012년에 일반인에게 공개되었다. 각 투어 세션은 일반적으로 3시간 소요된다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=3cqsy3rMSP0');
  homepage.setAttribute('href', 'http://www.puydufou.com/france/en');
});

global.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/global.png');
  parkName.innerText = '글로벌 빌리지';
  parkText.innerText = '매년 10월부터 4월까지 수많은 분들이 글로벌 빌리지를 방문합니다. 스릴 넘치는 놀이기구, 다양한 음식, 저녁에 열리는 문화 공연과 쇼핑 등의 볼거리와 즐길거리가 있습니다. 총 25개의 화려한 전시관에서는 75개국의 다양한 지역 특산품을 판매합니다. 각국의 전시장은 오감을 만족시키는 다양한 향기와 소리, 형형색색의 장식으로 방문객들을 사로잡습니다. 글로벌 빌리지에서 진정한 글로벌 어드벤처와 엔터테인먼트를 즐겨보세요. 매일 저녁 월드 컬처 스테이지에서 다양한 아티스트들이 마술과 음악, 코미디가 어우러진 콘서트를 선보입니다. 여러 레스토랑, 카페와 스트리트 푸드 판매대에서 세계 각국의 음식을 맛보세요.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=FoRZimbkUoU');
  homepage.setAttribute('href', 'https://globalvillage.ae/');
});

ferari.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/ferari.png');
  parkName.innerText = '페라리 월드';
  parkText.innerText = '축구장 7개 크기와 맞먹는 가장 거대한 입체 공간인 페라리 월드에서 전연령대의 가족이 즐길 수 있는 다양한 놀이기구와 어트랙션을 경험해보세요. 흥미진진한 레이싱 코스에서 F1 차량을 운전해보실 수 있는 유일무이한 페라리 테마 파크를 탐험하실 수 있어요. 페라리 월드에서 마라넬로의 공장에서 이뤄지는 페라리의 혁신과 깊이 있는 공장 투어를 직접 경험하고 페라리 GT카가 어떻게 만들어지는지 살펴보시는 건 어떨까요? 동작 기반 시뮬레이터에 탑승해서 F1의 스릴을 느끼시거나 속도감 있게 펼쳐지는 체험형 게임 공연을 즐기실 수 있습니다. 꼭 F1 레이싱의 팬이 아니더라도 아부다비의 페라리 월드에서 흥미진진한 시간을 보내보세요!';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=BCg0l1rAXk8');
  homepage.setAttribute('href', 'https://www.ferrariworldabudhabi.com/?utm_source=gmb&utm_medium=organic');
});

siworld.addEventListener('click', function() {
  parkImage.setAttribute('src','../static/image/themepark/siworld.png');
  parkName.innerText = '시월드';
  parkText.innerText = '호주 퀸즐랜드 골드코스트 북쪽 지역에 위치한 테마파크, 물놀이 공원, 해양 동물원이다. 정식 명칭은 "시월드 마린 파크 골드코스트". 호주의 다른 동물원들이 그렇듯 각종 쇼들이 충실하게 기획되어 있어 이것만 시간맞춰 보러 다녀도 하루가 훌쩍 간다.';
  youtube.setAttribute('href', 'https://www.youtube.com/watch?v=yW9hJEHR34o');
  homepage.setAttribute('href', 'https://seaworld.com.au/');
});