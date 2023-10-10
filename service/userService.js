const db = require('../db/index.js');
const User = require('../model/user.js');

createUser = async (username, email) => {
    const user = await User.create({
        username: username,
        email: email
    });
    return user;
};


module.exports ={
    createUser
}
