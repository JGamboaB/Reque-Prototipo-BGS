"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.getUsers = exports.getUserById = exports.deleteUserById = exports.createUser = exports.countUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

// ========== All Users ==========
var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.query.getAllUsers);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // ========== Create New User ==========


exports.getUsers = getUsers;

var createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, identification = _req$body.identification, status = _req$body.status, username = _req$body.username, password = _req$body.password, creationDate = _req$body.creationDate, email = _req$body.email, phone = _req$body.phone, birthdate = _req$body.birthdate, name = _req$body.name, surname = _req$body.surname, userTypeId = _req$body.userTypeId;

            if (!(identification == null || status == null || username == null || password == null || creationDate == null || name == null || surname == null || userTypeId == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Bad Request: missing a field.'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input("identification", _database.sql.BigInt, identification).input("status", _database.sql.SmallInt, status).input("username", _database.sql.NVarChar, username).input("password", _database.sql.NVarChar, password).input("creationDate", _database.sql.Date, creationDate).input("email", _database.sql.NVarChar, email).input("phone", _database.sql.BigInt, phone).input("birthdate", _database.sql.Date, birthdate).input("name", _database.sql.NVarChar, name).input("surname", _database.sql.NVarChar, surname).input("userTypeId", _database.sql.TinyInt, userTypeId).query(_database.query.createNewUser);

          case 9:
            res.json({
              identification: identification,
              status: status,
              username: username,
              password: password,
              creationDate: creationDate,
              email: email,
              phone: phone,
              birthdate: birthdate,
              name: name,
              surname: surname,
              userTypeId: userTypeId
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // ========== Get User by ID ==========


exports.createUser = createUser;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("userId", id).query(_database.query.getUserById);

          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // ========== Delete User by ID ==========


exports.getUserById = getUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("userId", id).query(_database.query.deleteUserById);

          case 6:
            result = _context4.sent;
            res.sendStatus(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // ========== Count All User ==========


exports.deleteUserById = deleteUserById;

var countUsers = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();

          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.query.countUsers);

          case 5:
            result = _context5.sent;
            res.json(result.recordset[0]['']);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function countUsers(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // ========== Update User by Id ==========


exports.countUsers = countUsers;

var updateUserById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, identification = _req$body2.identification, status = _req$body2.status, username = _req$body2.username, password = _req$body2.password, creationDate = _req$body2.creationDate, email = _req$body2.email, phone = _req$body2.phone, birthdate = _req$body2.birthdate, name = _req$body2.name, surname = _req$body2.surname, userTypeId = _req$body2.userTypeId;
            id = req.params.id;

            if (!(identification == null || status == null || username == null || password == null || creationDate == null || name == null || surname == null || userTypeId == null)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: 'Bad Request: missing a field.'
            }));

          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input("identification", _database.sql.BigInt, identification).input("status", _database.sql.SmallInt, status).input("username", _database.sql.NVarChar, username).input("password", _database.sql.NVarChar, password).input("creationDate", _database.sql.Date, creationDate).input("email", _database.sql.NVarChar, email).input("phone", _database.sql.BigInt, phone).input("birthdate", _database.sql.Date, birthdate).input("name", _database.sql.NVarChar, name).input("surname", _database.sql.NVarChar, surname).input("userTypeId", _database.sql.TinyInt, userTypeId).input("userId", _database.sql.Int, id).query(_database.query.updateUserById);

          case 9:
            res.json({
              identification: identification,
              status: status,
              username: username,
              password: password,
              creationDate: creationDate,
              email: email,
              phone: phone,
              birthdate: birthdate,
              name: name,
              surname: surname,
              userTypeId: userTypeId
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateUserById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;