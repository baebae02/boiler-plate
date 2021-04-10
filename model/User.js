const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //이메일을 입력받았을 때 빈칸을 없애주는 역할
        unique: 1 //같은 이메일 사용 못하게
    }, 
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //관리자면 1 아니면 0
        defulat: 0
    },
    image: String,
    token: {
        type: String //토큰을 이용해서 문서의 유효성을 곤리
    },
    tokenExp: {
        type: Number //토큰이 사용할 수 있는 기간(token experience)
    }
})

const User = mongoose.model('User', userSchema);
// const '모델이름' = mongoose.model('모델이름', Schema 이름);

module.exports = { User }
//모델을 다른 파일에서도 쓸 수 있기 위해 exports