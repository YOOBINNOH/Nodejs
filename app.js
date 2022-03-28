const express = require('express');
const app = express();
path = require('path')


// get or post 방식으로 받기, route 이용 시 둘 다 받기 가능
app.get('/', function(req, res){
    res.sendFile(__dirname + "/Login.html")
    
})

app.get('/test',function(req,res){
    res.send('test 화면 입니다.');
})

app.get('/register',function(req,res){
    res.sendFile(__dirname + "/register.html")
})

app.post('/Login',function(req,res){
    var id = req.query.login_id;
    var pw = req.query.login_pw;
    console.log(id);
    res.send(`id : ${id}, pw : ${pw}`);
})

// app.use() 는 미들웨어 실행 시 사용. 미들웨어 : 구조 내에서 중간 처리를 위한 함수, next() 를 통해 다음 실행으로 넘겨야함.

// app 은 express 객체, (포트번호 , 서버의 host, 실행 함수 적기)
app.listen(3000, () => console.log('서버 실행 중'));