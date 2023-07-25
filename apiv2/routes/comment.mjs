import  express  from 'express';
let router = express.Router()


router.get('/comment/:postId/:commentId',(req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('get comment in v2' + new Date());
})

router.get('/comments/:postId/:commentId',(req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post comment in v2' + new Date());
})

router.put('/comment/:postId/:commentId',(req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send(' edit comment in v2 ' + new Date());
})

router.delete('/comment/:postId/:commentId',(req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('delete comment in v2 ' + new Date());
})


export default router