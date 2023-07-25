import  express  from 'express';
let router = express.Router()

router.get('/feed/:userId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('feed v2' + new Date());

})


export default router