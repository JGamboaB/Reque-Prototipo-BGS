import {getConnection, sql, query} from "../database";

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