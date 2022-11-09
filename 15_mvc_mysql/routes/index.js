const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET / => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors); // 전체 DB

// POST /visitor/write => localhost:PORT/visitor/write
router.post('/visitor/write', controller.postVisitor); // DB 추가

// GET /visitor/get => localhost:PORT/visitor/get
router.get('/visitor/get', controller.getVisitor); // DB 1개 조회

// PATCH /visitor/edit => localhost:PORT/visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // DB 1개 수정

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); // 특정 DB 삭제

module.exports = router;