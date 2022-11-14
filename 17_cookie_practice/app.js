const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const popup = {
  httpOnly: true,
  maxAge: 30 * 1000, // 1d (24 * 60 * 60 * 1000) : 유효 시간
};

app.get("/", (req, res) => {
  // req.cookies.popup
  // 쿠키 설정 시 'hide'
  // 쿠키 미설정 시 ''
  res.render("index", { popup: req.cookies.popup });
});

app.post("/setCookie", (req, res) => {
  // 쿠키 설정
  // popup 쿠키의 값을 설정
  res.cookie("popup", "hide", popup);

  //응답 '쿠키 설정 성공' 메세지를 응답으로 보냄
  res.send("쿠키 설정 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
