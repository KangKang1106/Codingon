const express = require("express");
const Socket = require("socket.io");
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require("http").Server(app);
const io = require("socket.io")(http); // http-socket 연결
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("chat");
});

const nickArray = {};

// io.on
// - socket과 관련된 통신 작업을 처리
io.on("connection", (socket) => {
  // connection event
  // - 클라이언트가 서버에 접속했을 때 발생
  // - 콜백으로 socket 객체를 제공

  // console.log("**** ⭕ Server Socket Connected >> ", socket.id);
  // socket.id : socket 고유 id -> socket은 웹 페이지 별로 생김

  // [실습 42]
  // socket.on("Hello", (data) => {
  //   // console.log("socket on Hello >> ", data);
  //   console.log(`${data.who} : ${data.msg}`);
  //   socket.emit("HelloKr", { who: "Hello", msg: "안녕" });
  // });

  // socket.on("Study", (data) => {
  //   socket.emit("StudyKr", { who: "Study", msg: "공부" });
  // });

  // socket.on("Bye", (data) => {
  //   socket.emit("ByeKr", { who: "Bye", msg: "잘가" });
  // });

  // [실습 44] 채팅창 입장 안내 문구
  // io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다`);

  // [실습 44-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (nick) => {
    // 프론트에서 입력한 닉네임 값
    console.log("socket on setNick >> ", nick);

    // nickArray: {socketId1: nick1, socketId2: nick2, ...}
    // -> Object.values() : [socketId1, socketId2 ...]
    // -> indexOf() : nick 이 존재하는지
    if (Object.values(nickArray).indexOf(nick) > -1) {
      // 닉네임 중복이 있다면
      // 'error' 이름의 이벤트를 전달 ('닉네임 중복입니다')
      socket.emit("error", "중복된 닉네임입니다");
    } else {
      // 닉네임 중복이 없다면
      nickArray[socket.id] = nick; // {soket.id: nick}
      console.log("접속 유저 목록 >> ", nickArray);
      io.emit("notice", `${nick}님이 입장하셨습니다.`);
      socket.emit("entrySuccess", nick);
    }
  });

  // [실습 44-3] 접속자 퇴장 시
  // notice 이벤트로 퇴장 공지
  socket.on("disconnect", () => {
    // socket.id console.log 찍기
    console.log(socket.id);
    // 전체 공지 ('notice', 퇴장 메세지(유저 닉네임 포함))
    io.emit("notice", `${nickArray[socket.id]}님이 퇴장하셨습니다.`);
    // nickArray 해당 유저 삭제 (객체에서 key-value 쌍 삭제)
    delete nickArray[socket.id];
  });

  socket.on("send", (data) => {
    console.log("socket on send >> ", data);

    // [실습 45] 채팅창 메세지 전송 Step2
    const sendData = { nick: data.myNick, msg: data.msg };
    if (sendData.msg.length == 0) {
      return;
    } else {
      io.emit("newMessage", sendData);
    }
  });
});

// ** 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야함 **
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
