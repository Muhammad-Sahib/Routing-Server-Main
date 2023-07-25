import  express  from 'express';
let router = express.Router()

router.get('/feed/:userId', (req, res, next) => {
    console.log('this is feed!', new Date());
    res.send('feed v1' + new Date());
});




export default router