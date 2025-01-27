const JsonRepository = require('./json.repository')




class JsonBookRepository extends JsonRepository {
    constructor(bookPath){
        super(bookPath|| process.env.BOOKS_DB_PATH)
    }
}

module.exports= JsonBookRepository;