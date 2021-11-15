import {getConnection, sql, query} from "../database";

// USER

// ========== All Users ==========
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(query.getAllUsers);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Create New User ==========
export const createUser = async (req, res) => {
    const {identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId} = req.body
    
    if (identification == null || status == null || username == null || password == null || creationDate == null || name == null || surname == null || userTypeId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    try {

        const pool = await getConnection();
        await pool.request()
        .input("identification", sql.BigInt, identification)
        .input("status", sql.SmallInt, status)
        .input("username", sql.NVarChar, username)
        .input("password", sql.NVarChar, password)
        .input("creationDate", sql.Date, creationDate)
        .input("email", sql.NVarChar, email)
        .input("phone", sql.BigInt, phone)
        .input("birthdate", sql.Date, birthdate)
        .input("name", sql.NVarChar, name)
        .input("surname", sql.NVarChar, surname)
        .input("userTypeId", sql.TinyInt, userTypeId)
        .query(query.createNewUser)

        res.json({identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId});
    
    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Get User by ID ==========
export const getUserById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("userId", id).query(query.getUserById);

    res.send(result.recordset[0]);
}

// ========== Delete User by ID ==========
export const deleteUserById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("userId", id).query(query.deleteUserById);

    res.sendStatus(204);
}

// ========== Count All User ==========
export const countUsers = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(query.countUsers);

    res.json(result.recordset[0][''])
}

// ========== Update User by Id ==========
export const updateUserById = async (req, res) => {
    const {identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId} = req.body
    const {id} = req.params

    if (identification == null || status == null || username == null || password == null || creationDate == null || name == null || surname == null || userTypeId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    const pool = await getConnection()
    await pool.request()
        .input("identification", sql.BigInt, identification)
        .input("status", sql.SmallInt, status)
        .input("username", sql.NVarChar, username)
        .input("password", sql.NVarChar, password)
        .input("creationDate", sql.Date, creationDate)
        .input("email", sql.NVarChar, email)
        .input("phone", sql.BigInt, phone)
        .input("birthdate", sql.Date, birthdate)
        .input("name", sql.NVarChar, name)
        .input("surname", sql.NVarChar, surname)
        .input("userTypeId", sql.TinyInt, userTypeId)
        .input("userId", sql.Int, id)
        .query(query.updateUserById);

    res.json({identification, status, username, password, creationDate, email, phone, birthdate, name, surname, userTypeId});
};


// TRANSFERENCE

// ========== All Transferences ==========
export const getTransferences = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(query.getAllTransference);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Create New Transference ==========
export const createTransference = async (req, res) => {
    const {receiverAccount, giverAccount, amount, name, description, date} = req.body
    
    if (receiverAccount == null || giverAccount == null || amount == null || name == null || date == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    try {

        const pool = await getConnection();
        await pool.request()
        .input("receiverAccount", sql.NVarChar, receiverAccount)
        .input("giverAccount", sql.NVarChar, giverAccount)
        .input("amount", sql.Money, amount)
        .input("name", sql.NVarChar, name)
        .input("description", sql.NVarChar, description)
        .input("date", sql.DateTime, date)
        .query(query.createNewTransference)

        res.json({receiverAccount, giverAccount, amount, name, description, date});
    
    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Get Transference by ID ==========
export const getTransferenceById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("transferenceId", id).query(query.getTransferenceById);

    res.send(result.recordset[0]);
}

// ========== Delete Transference by ID ==========
export const deleteTransferenceById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("transferenceId", id).query(query.deleteTransferenceById);

    res.sendStatus(204);
}

// ========== Count All Transferences ==========
export const countTransferences = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(query.countTransferences);

    res.json(result.recordset[0][''])
}

// ========== Update Transference by Id ==========
export const updateTransferenceById = async (req, res) => {
    const {receiverAccount, giverAccount, amount, name, description, date} = req.body
    const {id} = req.params

    if (receiverAccount == null || giverAccount == null || amount == null || name == null || date == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    const pool = await getConnection()
    await pool.request()
        .input("receiverAccount", sql.NVarChar, receiverAccount)
        .input("giverAccount", sql.NVarChar, giverAccount)
        .input("amount", sql.Money, amount)
        .input("name", sql.NVarChar, name)
        .input("description", sql.NVarChar, description)
        .input("date", sql.DateTime, date)
        .input("transferenceId", sql.Int, id)
        .query(query.updateTransferenceById);

    res.json({receiverAccount, giverAccount, amount, name, description, date});
};


// ACCOUNT

// ========== All Account ==========
export const getAccounts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(query.getAllAccounts);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Create New Account ==========
export const createAccount = async (req, res) => {
    const {ibanCode, balance, creationDate, type, moneyTypeId, userId} = req.body
    
    if (ibanCode == null || balance == null || creationDate == null || type == null || moneyTypeId == null || userId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    try {

        const pool = await getConnection();
        await pool.request()
        .input("ibanCode", sql.NVarChar, ibanCode)
        .input("balance", sql.Money, balance)
        .input("creationDate", sql.Date, creationDate)
        .input("type", sql.Bit, type)
        .input("moneyTypeId", sql.TinyInt, moneyTypeId)
        .input("userId", sql.Int, userId)
        .query(query.createNewAccount)

        res.json({ibanCode, balance, creationDate, type, moneyTypeId, userId});
    
    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Get Account by IbanCode ==========
export const getAccountById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("ibanCode", id).query(query.getAccountById);

    res.send(result.recordset[0]);
}

// ========== Delete Account by ID ==========
export const deleteAccountById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("ibanCode", id).query(query.deleteAccountById);

    res.sendStatus(204);
}

// ========== Count All Account ==========
export const countAccounts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(query.countAccounts);

    res.json(result.recordset[0][''])
}

// ========== Update Account by Id ==========
export const updateAccountById = async (req, res) => {
    const {ibanCode, balance, creationDate, type, moneyTypeId, userId} = req.body
    const {id} = req.params

    if (ibanCode == null || balance == null || creationDate == null || type == null || moneyTypeId == null || userId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    const pool = await getConnection()
    await pool.request()
        .input("ibanCode", sql.NVarChar, ibanCode)
        .input("balance", sql.Money, balance)
        .input("creationDate", sql.Date, creationDate)
        .input("type", sql.Bit, type)
        .input("moneyTipeId", sql.TinyInt, moneyTypeId)
        .input("userId", sql.Int, userId)
        .input("ibanCode", sql.Int, id)
        .query(query.updateAccountById);

    res.json({ibanCode, balance, creationDate, type, moneyTypeId, userId});
};


// CARD

// ========== All Cards ==========
export const getCards = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(query.getAllCards);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Create New Card ==========
export const createCard = async (req, res) => {
    const {number, expDate, cvv, issuingCompany, userId, accountId} = req.body
    
    if (number == null || expDate == null || cvv == null || issuingCompany == null || userId == null || accountId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    try {

        const pool = await getConnection();
        await pool.request()
        .input("number", sql.BigInt, number)
        .input("expDate", sql.Date, expDate)
        .input("cvv", sql.SmallInt, cvv)
        .input("issuingCompany", sql.NVarChar, issuingCompany)
        .input("userId", sql.Int, userId)
        .input("accountId", sql.NVarChar, accountId)
        .query(query.createNewCard)

        res.json({number, expDate, cvv, issuingCompany, userId, accountId});
    
    } catch (error) {

        res.status(500);
        res.send(error.message);
    }
}

// ========== Get Card by Id ==========
export const getCardById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("cardId", id).query(query.getCardById);

    res.send(result.recordset[0]);
}

// ========== Delete Card by ID ==========
export const deleteCardById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("cardId", id).query(query.deleteCardById);

    res.sendStatus(204);
}

// ========== Count All Card ==========
export const countCards = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(query.countCards);

    res.json(result.recordset[0][''])
}

// ========== Update Card by Id ==========
export const updateCardById = async (req, res) => {
    const {number, expDate, cvv, issuingCompany, userId, accountId} = req.body
    const {id} = req.params

    if (number == null || expDate == null || cvv == null || issuingCompany == null || userId == null || accountId == null){
        return res.status(400).json({msg: 'Bad Request: missing a field.'})
    }

    const pool = await getConnection()
    await pool.request()
        .input("number", sql.BigInt, number)
        .input("expDate", sql.Date, expDate)
        .input("cvv", sql.SmallInt, cvv)
        .input("issuingCompany", sql.NVarChar, issuingCompany)
        .input("userId", sql.Int, userId)
        .input("accountId", sql.NVarChar, accountId)
        .input("cardId", sql.SmallInt, id)
        .query(query.updateCardById);

    res.json({number, expDate, cvv, issuingCompany, userId, accountId});
};