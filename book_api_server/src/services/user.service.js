const {AuthenticationError,AuthorizationError} = require('../utils/errors');
const bcrypt = require('bcrypt');

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
        console.log('this.userRepository',this.userRepository);
    }

    async getAllUsers(){
        
        return await this.userRepository.getAll();
    }

    async register(user){

        user.password = await bcrypt.hash(user.password, 10);

        let dbUser= await this.userRepository.create(user);
        return {status: 'created', userName: dbUser.email, status:dbUser.status}
    }

    async login({email, password}){
        console.log('login')
        console.log('email',email);
        console.log('password',password);
        
        let user = await this.userRepository.getOne({email});
       console.log('db user in logic',user);
       
       if(!user)
            throw new AuthenticationError('Invalid User Credentials',{email});

    //    if(user.password !==password)
    //         throw new AuthenticationError('Invalid Password',{email});

        let match = await bcrypt.compare(password, user.password);
        if(!match)
            throw new AuthenticationError('Invalid Password',{email});

       if (user.inactive)
            throw new AuthorizationError('User Not Active');

        return {photo: user.photo, name:user.name, email: user.email, roles:user.roles};
    }
}

UserService._dependencies=['userRepository']

module.exports = UserService;