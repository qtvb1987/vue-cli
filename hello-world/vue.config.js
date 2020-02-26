module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
     ? '/cart/'
     : '/t',
     devServer: {
        // before(app){
        //      //app是一个express实例
        //      app.get('/api/courses',(req,res)=>{
        //          setTimeout(() => {
        //             res.json([{name:'web全栈',price:456},{name:'web高级',price:123}])
        //            }, 1000);
        //        })
        // },
        proxy:'http://localhost:3001'
      }
}