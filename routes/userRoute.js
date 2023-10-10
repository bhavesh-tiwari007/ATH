const router = require('express').Router();
const userController = require('../controller/userController');


router.post('/' , userController.addUser);


module.exports = router;