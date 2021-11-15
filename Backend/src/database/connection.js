import sql from 'mssql'

const dbSettings = {
    user: 'david',
    password: "1234",
    server: 'localhost',
    database: "reque_proyecto",
    options:{
        encrypt:true,
        trustServerCertificate: true,
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}