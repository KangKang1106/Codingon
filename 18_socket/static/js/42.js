function setMsg(obj) {
  document.querySelector(
    "#from-server"
  ).textContent = `${obj.who} : ${obj.msg}`;
}

function sayHello() {
  socket.emit("Hello", { who: "client", msg: "Hello" });
  // console.log("socket on HelloKr >> ", data);
  socket.on("HelloKr", (data) => {
    setMsg(data);
  });
}

function sayStudy() {
  socket.emit("Study", { who: "client", msg: "Study" });
  socket.on("StudyKr", (data) => {
    setMsg(data);
  });
}

function sayBye() {
  socket.emit("Bye", { who: "client", msg: "Bye" });
  socket.on("ByeKr", (data) => {
    setMsg(data);
  });
}
