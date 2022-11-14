const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// (임시) DB에 저장되어 있는 유저 정보
const userInfo = { id: "a", pw: "1" };

// GET /login -> index.ejs render
app.get("/", (req, res) => {
  console.log(req.session.user);
  // 세션 설정 x -> undefined
  // 세션 설정 o -> userInfo.id 값

  // 세션 값이 있으면, index.ejs render {isLogin: true, user: req.session.user}
  // 세션 값이 없으면, index.ejs render {isLogin: false}
  if (req.session.user !== undefined) {
    res.render("index", { isLogin: true, user: req.session.user });
  } else {
    res.render("index", { isLogin: false });
  }
});

// GET /login -> login.ejs render
app.get("/login", (req, res) => {
  res.render("login");
});

// POST /login
app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  // 로그인 정보 일치한다면
  // - req.session.user 저장
  // - / redirect
  // 로그인 정보 불일치한다면
  // - alert
  // - / 경로로 이동

  if (userInfo.id == req.body.id && userInfo.pw == req.body.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send(
      `<script>
        alert('로그인 실패');
        document.location.href = '/';
      </script>`
    );
  }
});

// GET /logout
app.get("/logout", (req, res) => {
  const user = req.session.user;
  console.log("GET /logout | req.session.user" + user);
  if (user !== undefined) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      console.log(user);
      res.redirect("/");
    });
  } else {
    res.send(
      `<script>
        alert('잘못된 접근입니다');
        document.location.href = '/';
      </script>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
