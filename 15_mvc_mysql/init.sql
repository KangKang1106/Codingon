SHOW DATABASES;
USE kdt;

SHOW TABLES;
CREATE TABLE visitor (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);
DESC visitor;

INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES ('가나다', '라마바사');
INSERT INTO visitor (name, comment) VALUES ('에비씨', '디이에프');
SELECT * FROM visitor;

-- DCL
-- mysql 사용자 추가 (user 계정)
CREATE USER 'user'@'%' IDENTIFIED BY 'kang8798';

-- user 계정에 db 권한 부여 (모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- 현재 사용중인 mysql 캐시 지우가 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'kang8798';