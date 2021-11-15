export const query = {
    // USER
    getAllUsers: "SELECT * FROM [User]",
    createNewUser: "INSERT INTO [User] (identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId) VALUES (@identification, @status, @username, @password, @creationDate, @email, @phone, @birthdate, @name, @surname, @userTypeId)",
    getUserById: "SELECT * FROM [User] Where userId = @userId",
    deleteUserById: "DELETE FROM [User] Where userId = @userId",
    countUsers: "SELECT COUNT(*) FROM [User]",
    updateUserById: "UPDATE [User] SET identification = @identification, status = @status, username = @username, password = @password, creationDate = @creationDate, email = @email, phone = @phone, birthdate = @birthdate, name = @name, surname = @surname, userTypeId = @userTypeId WHERE userId = @userId",

    // TRANSFERENCE
    getAllTransference: "SELECT * FROM [Transference]",
    createNewTransference: "INSERT INTO [Transference] (receiverAccount, giverAccount, amount, name, description, date) VALUES (@receiverAccount, @giverAccount, @amount, @name, @description, @date)",
    getTransferenceById: "SELECT * FROM [Transference] Where transferenceId = @transferenceId",
    deleteTransferenceById: "DELETE FROM [Transference] Where transferenceId = @transferenceId",
    countTransferences: "SELECT COUNT(*) FROM Transference",
    updateTransferenceById: "UPDATE [Transference] SET receiverAccount = @receiverAccount, giverAccount = @giverAccount, amount = @amount, name = @name, description = @description, date = @date WHERE transferenceId = @transferenceId",

    // ACCOUNT
    getAllAccounts: "SELECT * FROM [Account]",
    createNewAccount: "INSERT INTO [Account] (ibanCode, balance, creationDate, type, moneyTypeId, userId) VALUES (@ibanCode, @balance, @creationDate, @type, @moneyTypeId, @userId)",
    getAccountById: "SELECT * FROM [Account] Where ibanCode = @ibanCode",
    deleteAccountById: "DELETE FROM [Account] Where ibanCode = @ibanCode",
    countAccounts: "SELECT COUNT(*) FROM Account",
    updateAccountById: "UPDATE [Account] SET ibanCode = @ibanCode, balance = @balance, creationDate = @creationDate, type = @type, moneyTypeId = @moneyTypeId, userId = @userId WHERE ibanCode = @ibanCode",

    // CARD
    getAllCards: "SELECT * FROM [Card]",
    createNewCard: "INSERT INTO [Card] (number, expDate, cvv, issuingCompany, userId, accountId) VALUES (@number, @expDate, @cvv, @issuingCompany, @userId, @accountId)",
    getCardById: "SELECT * FROM [Card] Where cardId = @cardId",
    deleteCardById: "DELETE FROM [Card] Where cardId = @cardId",
    countCards: "SELECT COUNT(*) FROM Card",
    updateCardById: "UPDATE [Card] SET number = @number, expDate = @expDate, cvv = @cvv, issuingCompany = @issuingCompany, userId = @userId, accountId = @accountId WHERE cardId = @cardId"

}