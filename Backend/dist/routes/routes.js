"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller");

var router = (0, _express.Router)();
router.get("/user", _controller.getUsers);
router.get("/user/:id", _controller.getUserById);
router.post("/user", _controller.createUser);
router.get("/user/count", _controller.countUsers);
router["delete"]("/user/:id", _controller.deleteUserById);
router.put("/user/:id", _controller.updateUserById);
var _default = router;
exports["default"] = _default;