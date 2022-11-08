const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index', { title: '동적 폼 실습'});
};

exports.practice30 = (req, res) => {
  console.log(req.body);
  for (let i = 0; i < User.Info().length; i++) {
    if (User.Info()[i].realId === req.body.userId && User.Info()[i].realPw === req.body.userPw) {
      return res.send({ userInfo: User.Info()[i].name, isSuccess: true });
    } 
  }
  res.send({ isSuccess: false });
};