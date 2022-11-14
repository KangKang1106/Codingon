const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

// session({세션 모듈_옵션})
// - secret : 세션 발급 시 사용되는 키
// - resave : 매 요청마다 세션을 다시 저장할 것인지 설정하는 옵션
// - saveUninitialized : 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지 설정하는 옵션
// - secure: true 설정 시 https에서만 세션을 주고 받음
// - name : 세션 쿠키명 (connet.sid 이지만 다른 이름 줄수도 있음)
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    name: "my-session",
  })
);

// req.session : 사용자별로 해당 객체 안에 세션 정보 유지됨

// 세션 쿠키 설정
// req.session.키 = 값

// 세션 쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백함수)
// - 콜백 함수 : 세션 삭제 시 호출할 콜백 함수

app.get("/", (req, res) => {
  // 세션 설정
  req.session.name = "홍길동";

  // 응답 보냄
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

// app.get("/sid", (req, res) => {
//   res.send(req.sessionID);
// });

app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }

    // 1. GET / : name 세션 설정
    // 2. GET /name: name 값 확인
    // 3. GET /destory: 세션 삭제
    // 4. GET /name: name확인 불가능
    res.send("세션 삭제 완료");
    // res.redirect("/name"); // 경로 리다이렉트
  });
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
