/*
Navicat MySQL Data Transfer

Source Server         : abcd
Source Server Version : 50513
Source Host           : localhost:3306
Source Database       : ttkp

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-08-27 09:05:43
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `knum`
-- ----------------------------
DROP TABLE IF EXISTS `knum`;
CREATE TABLE `knum` (
  `uid` int(10) NOT NULL,
  `tid` int(10) NOT NULL,
  `tnum` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of knum
-- ----------------------------

-- ----------------------------
-- Table structure for `ktype`
-- ----------------------------
DROP TABLE IF EXISTS `ktype`;
CREATE TABLE `ktype` (
  `tid` int(10) NOT NULL DEFAULT '0',
  `tname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ktype
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(40) NOT NULL,
  `tel` varchar(40) NOT NULL,
  `pwd` varchar(40) CHARACTER SET euckr NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO user VALUES ('1', 'etfer', '124235436', '555');
INSERT INTO user VALUES ('2', 'gt', '24235', '333');
INSERT INTO user VALUES ('3', '12', '123', '123');
INSERT INTO user VALUES ('4', 'qwqw', '15307478847', '123');
INSERT INTO user VALUES ('5', 'asdde', '15307479989', '54');
INSERT INTO user VALUES ('6', 'fasd', '13420489304', '123');
