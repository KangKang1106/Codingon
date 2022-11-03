const { render } = require("ejs");
const express = require("express");

const app = express();
const PORT = 9000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (request, response) {
  response.render("main6");
});

app.get("/china", function (request, response) {
  response.render("china");
});

app.get("/japan", function (request, response) {
  response.render("japan");
});

app.get("/tailand", function (request, response) {
  response.render("tailand");
});

app.get("/vietnam", function (request, response) {
  response.render("vietnam");
});

app.get("/eygpt", function (request, response) {
  response.render("eygpt");
});

app.get("/molicious", function (request, response) {
  response.render("molicious");
});

app.get("/moroco", function (request, response) {
  response.render("moroco");
});

app.get("/southafrica", function (request, response) {
  response.render("southafrica");
});

app.get("/canada", function (request, response) {
  response.render("canada");
});

app.get("/usa", function (request, response) {
  response.render("usa");
});
app.get("/australia", function (request, response) {
  response.render("australia");
});

app.get("/newzealand", function (request, response) {
  response.render("newzealand");
});

app.get("/swiss", function (request, response) {
  response.render("swiss");
});

app.get("/spain", function (request, response) {
  response.render("spain");
});

app.get("/netherland", function (request, response) {
  response.render("netherland");
});

app.get("/finland", function (request, response) {
  response.render("finland");
});

app.get("/chille", function (request, response) {
  response.render("chille");
});

app.get("/brazil", function (request, response) {
  response.render("brazil");
});
app.get("/cuba", function (request, response) {
  response.render("cuba");
});

app.get("/mexico", function (request, response) {
  response.render("mexico");
});

app.get("/worldcontinents", function (request, response) {
  response.render("worldcontinents");
});

  app.get("/mbti", function (request, response) {
    response.render("mbti");
  });

  app.get("/festival", function (request, response) {
    response.render("festival");
  });

  app.get("/universal", function (request, response) {
    response.render("universal");
  });

  app.get("/description", function (request, response) {
    response.render("description");
  });

  app.get("/korea", function (request, response) {
    response.render("korea");
  });


app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
