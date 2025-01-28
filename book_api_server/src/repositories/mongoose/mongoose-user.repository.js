const MongooseRepository = require('./mongoose.repository')


class MongooseUserRepository extends MongooseRepository {
    constructor(model){
        super(model);
    }
}

MongooseUserRepository._dependencies = ["user"];

module.exports = MongooseUserRepository;