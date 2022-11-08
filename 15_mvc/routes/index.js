const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// "경로 설정" = 라우팅
// // 기본 경로: localhost:PORT/

// 함수 선언
// 1) 명시적 함수 선언
// function func_name() {}
// 2) 함수 표현식
// const var_name = function() {}

// 2 변형) 화살표 함수
// 함수 표현식을 더 단순하게 작성
// const f = () => {}

// GET / - [댓글 목록 보기] 이동 링크 걸려있음
// localhost:PORT/
router.get('/', (controller.main));

// GET /comments : 댓글 전체 목록 확인할 수 있음
// localhost:PORT/comments
router.get('/comments', (controller.comments));

// GET /commnets/:id : 각 댓글을 자세히 볼 수 있음
// localhost:PORT/comment
router.get('/comment/:id', (controller.comment));

// module.exports 를 통해서 router 등록
// -> 다른 파일에서도 사용 가능
module.exports = router;