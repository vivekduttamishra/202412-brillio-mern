const injector = require('../utils/injector')

const userService = injector.getService('userService');

//console.log('userService',userService.constructor.name);


const getAllUsers = async  ()=> await userService.getAllUsers();

const login = async({body})=> await userService.login(body);


const register = async({body})=> await userService.register(body);


module.exports = {
    getAllUsers,
    login,
    register
}