const Visitor = require('../model/Visitors');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // before
  // console.log(Visitor.getVisitors());
  // res.render('visitor', {data: Visitor.getVisitors()});

  // after
  Visitor.getVisitors((result) => {
    console.log('Cvisitor.js', result);
    res.render('visitor', {data: result});
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js', result);
    res.send({
      id: result, // pk (id)
      name: req.body.name, // 입력한 name
      comment: req.body.comment // 입력한 comment
    });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js', result);
    res.send('정말 삭제하시겠습니까?');
  });
};