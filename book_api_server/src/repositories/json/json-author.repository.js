const JsonRepository = require('./json.repository')


class JsonAuthorRepository extends JsonRepository {
    constructor(authorPath){
        super(authorPath || process.env.AUTHORS_DB_PATH)
    }
}

//no special dependcies.

module.exports= JsonAuthorRepository;