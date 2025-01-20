let express= require('express');

let app = express();

app.get('*', (req, res,next) => {
    return res.send(req.path)
}); 

app.listen(3000, async() => {
    console.log('Server is running on port 3000');
});