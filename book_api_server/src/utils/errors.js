class BusinessError extends Error{
    constructor(message, errors){
        super(message|| this.constructor.name);
        this.errors=errors || {message};
    }
}


class ValidationError extends BusinessError{
   
}

class NotFoundError extends Error{
   
}

class AuthenticationError extends Error{
   
}

class AuthorizationError extends Error{
   
}

module.exports={
    BusinessError,
    ValidationError,
    NotFoundError,
    AuthenticationError,
    AuthorizationError
}