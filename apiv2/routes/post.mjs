import express, { Router } from 'express';
let router = express.Router()





router.get('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post created in v2');
})


router.get('/posts/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('get post in v2' + new Date());
})


router.post('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('get post in v2 ' + new Date());
})


router.put('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post edit in v2');
})


router.delete('/post/:userId/postId', (req, res, next) =>{
    console.log('this is signup!', new Date());
    res.send('post delete in v2');
})


export default router