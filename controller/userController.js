const {createUser} = require('../service/userService');


const addUser = async (req, res) => {    
    try {
        const { username, email } = req.body;
        await createUser(username, email);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addUser
}