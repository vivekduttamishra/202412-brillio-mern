class ValidationError extends Error{
    constructor(errors){
        super('Validation Error');
        this.errors=errors;
    }
}

class NotFoundError extends Error{
    constructor(id,message='Not Found'){
        super(message);
        this.errors={
            message,id
        }
    }
}

module.export={
    ValidationError,
    NotFoundError
}