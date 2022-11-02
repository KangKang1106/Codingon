const { query } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routing (경로 설정)
app.get('/', function(req, res) {
  res.render('dynamic', {title: '동적 폼을 배워보자'});
});

app.get('/practice29', function(req, res) {
  res.render('practice29');
});

// 1. ajax
// GET /ajax
app.get('/ajax', function(req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /ajax
app.post('/ajax', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
// GET /axios
app.get('/axios', function(req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /axios
app.post('/axios', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.post('/axios2', function(req, res) {
  if(req.body.id == 'banana' & req.body.pw == '4321') {
    let success = {
      text: 'banana님! 로그인 성공',
      color: 'blue',
      fontWeight: 'bold',
    };
    res.send(success);
  } else {
    let success = {
      text: '아이디 또는 패스워드 오류',
      color: 'red',
      fontWeight: 'bold',
    };
    res.send(success);
  }
});

// 실습 30 풀이
const realId = 'kang';
const realPw = '1234';

app.post('/login2', function(req, res) {
  // {userId: 'kang', userPw: '1234}
  if (realId == req.body.userId & realPw == req.body.userPw) {
    res.send({userInfo: req.body, isLogin: true});
  } else {
    res.send({isLogin: false});
  }
});

// 3. fetch
// GET /fetch
app.get('/fetch', function(req,res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post('/fetch', function(req,res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});