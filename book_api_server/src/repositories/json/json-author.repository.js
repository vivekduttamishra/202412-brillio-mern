const JsonBookRepository = require('./json.repository')


class JsonAuthorRepository extends JsonRepository {
    constructor(authorPath){
        super(authorPath || process.env.AUTHOR_DB_PATH)
    }
}

module.exports= JsonAuthorRepository;