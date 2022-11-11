// sequelize-cli 자동 생성한 파일
"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언 시 매개변수로 정보들을 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
// model/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = {sequelize: sequelize, Sequelize: Sequelize, Visitor: ?}

module.exports = db;
// db 변수 내보냄 -> 다른 파일에서 사용
