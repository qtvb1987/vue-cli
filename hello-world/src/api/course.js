//模拟异步数据调用
export function   getCourses(){
    return new Promise(resolve=>{
        setTimeout(()=>{
           resolve([{name:'web全栈',price:456},{name:'web高级',price:123}])
        },1000)
    })
}