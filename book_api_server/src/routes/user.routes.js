const {register,login,getAllUsers} = require('../controllers/user.controller');
const {routeHandler} = require('../utils/expressx');


const express = require('express');

const router = express.Router();


router.route("/").get( routeHandler(getAllUsers) )

router
    .route("/signup")
    .post( routeHandler(register));


router
    .route("/signin")
    .post(routeHandler(login));


module.exports = router;