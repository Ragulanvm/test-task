
const {dbConnection} = require('../../connection');
async function recordActivity(username, data) {
try {
    const {event_type, metadata, timestamp} = data;
    const sqlQuery = "select * from users where username = ?"
    const param = [username]
    
    const fetchUser = await dbConnection.query(sqlQuery, param);
    if(!fetchUser.username){
        throw new Error("Username not found")
    }

    const insertSqlQuery = 'Insert into activty(user_id, event_type, timestamp, metadata) values (?,?,?,?)';
    const insertSqlParam = [fetchUser.id, event_type, timestamp, metadata]
    const insertActivity = await dbConnection.query(insertSqlQuery, insertSqlParam);
    if(insertActivity.affected_rows > 0){
        return {message: "activey recorded"}
    }
    else{
        throw new Error("DB connection Error")
    }

} catch (error) {
    return error
}

}

exports.recordActivity;