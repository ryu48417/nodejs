var express = require('express');
var router = express.Router();

router.get('/',(req, res, next) => {
    var data = {
        title: 'Hello!',
        content: '※何か書いて送信して下さい。'
    };
    res.render('hello', data);
});

router.post('/post',(req, res, next) => {
    var msg = req.body['message'];
    var data = {
        title: 'Hello!',
        content: 'あなたは、「' + msg + '」と送信しました。'
    };
    res.render('hello', data);
});

module.exports = router;