"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;
var query = {
  getAllUsers: "SELECT * FROM [User]",
  createNewUser: "INSERT INTO [User] (identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId) VALUES (@identification, @status, @username, @password, @creationDate, @email, @phone, @birthdate, @name, @surname, @userTypeId)",
  getUserById: "SELECT * FROM [User] Where userId = @userId",
  deleteUserById: "DELETE FROM [User] Where userId = @userId",
  countUsers: "SELECT COUNT(*) FROM [User]",
  updateUserById: "UPDATE [User] SET identification = @identification, status = @status, username = @username, password = @password, creationDate = @creationDate, email = @email, phone = @phone, birthdate = @birthdate, name = @name, surname = @surname, userTypeId = @userTypeId WHERE userId = @userId"
};
exports.query = query;