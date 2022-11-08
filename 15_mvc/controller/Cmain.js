const Comment = require('../model/Comment');

exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  console.log(Comment.commentInfos()); // 댓글 목록 확인
  res.render('comments', {commentInfos: Comment.commentInfos()});
};

// GET /commnets/:id : 각 댓글을 자세히 볼 수 있음
exports.comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보가 담겨있음
  console.log(req.params.id); // id 값 추출

  const comments = Comment.commentInfos();
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments[commentId -1]); // 댓글 목록에서 특정 댓글 정보 추출

  // 1. :id - 존재하지 않는 댓글 id x (0, 음수, 댓글 배열 길이보다 큰 값)
  if (commentId < 1 | commentId > comments.length) {
    return res.render('404');
  }
  // 2. :id - 숫자가 아닌 것이 들어오면 x
  if (isNaN(commentId)) {
    return res.render('404');
  }

  res.render('comment', {commentInfos: comments[commentId -1]});
};