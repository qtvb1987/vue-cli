// npm i express
const express =require('express') 
const app = express()

app.get('/api/courses',(req,res)=>{
        setTimeout(() => {
        res.json([{name:'web全栈1111',price:456},{name:'web高级222',price:123}])
        }, 1000);
    })

app.listen(3001)