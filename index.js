const express = require('express')
//express 모듈을 가져옴
const app = express()
//express의 function을 이용해 app을 만듬
const port = 5000
//5000번의 port를 백서버에 둠

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bae4614:bae408204@boilerplate.vlzq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/',(req,res) => res.send('Hello world'));
//루트 디렉토리에 오면 hello world 출력

app.listen(port,() => console.log('Example app listening  ${port}!'));
