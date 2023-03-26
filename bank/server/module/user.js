let mongoUtil = require( '../db' );
let db = mongoUtil.getDb();

console.log("bankdb", db);
const addUser = (user) => {
  try {
    db.users.insertOne(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addUser };
