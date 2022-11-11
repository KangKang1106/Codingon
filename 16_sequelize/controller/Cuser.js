// TODO: 컨트롤러 코드
const models = require("../models");

exports.main = (req, res) => {
  res.render("/");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignup = (req, res) => {
  // console.log(req.body);
  // User.postSignup(req.body, (result) => {
  //   console.log(result);
  //   res.send({
  //     userid: req.body.userid,
  //     name: req.body.name,
  //     pw: req.body.pw,
  //   });
  // });

  models.User.create({
    // INSERT INTO user (userid, name, pw) VALUES('${data.userid}
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("여기 >>>> " + result);
    res.send(result);
  });
};

exports.postSignin = (req, res) => {
  // User.postSignin(req.body, (result) => {
  //   if (result == undefined) {
  //     res.send(false);
  //   } else {
  //     res.send(true);
  //   }
  // });

  // SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}'
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result == null) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

exports.postProfile = (req, res) => {
  // User.postProfile(req.body.userid, (result) => {
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     res.redirect("/user/signin");
  //   }
  // });

  // SELECT * FROM user WHERE userid = '${userid}' LIMIT 1
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("여기" + result);

    if (result != null) {
      res.render("profile", { data: result });
    }
  });
};

exports.editProfile = (req, res) => {
  // User.editProfile(req.body, () => {
  //   res.send();
  // });

  // UPDATE user SET pw = '${data.pw}', name = '${data.name}' WHERE id = ${data.id}
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.send();
  });
};

exports.deleteProfile = (req, res) => {
  // User.deleteProfile(req.body.id, () => {
  //   res.redirect("/user/signin");
  // });

  // DELETE FROM user WHERE id = ${id}
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.redirect("/user/signin");
  });
};
