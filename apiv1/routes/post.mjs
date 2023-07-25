import express, { Router } from 'express';
let router = express.Router()





router.get('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post created in v1');
})


router.get('/posts/:userId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('get created in v1' + new Date());
})


router.post('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post created in v1' + new Date());
})


router.put('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('edit post in v1');
})


router.delete('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post delete in v1' + new Date());
})


export default router