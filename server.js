const app=require('express')()
const bcrypt=require('bcrypt')
const socket=require('socket.io')
const PORT=3000;
const password='12345';
const saltRounds=10;
const blog=require('./blog_modules/blog')




const server=app.listen(PORT,()=>{
    console.log("Server is running")
})
const io=socket(server,{
    cors:{
        origin:'*'
    }
})

io.on("connection",(socketClient)=>{
    console.log(socketClient.id)
    socketClient.emit("SUCCESSFUL_CONNECTION","Successfull coonection is made")
    socketClient.on("MESSAGE",(data)=>{
        console.log(data);
        const a=blog.list1();
        socketClient.emit("DATA_SEND",a);
    })
})


const logger=(req,res,next)=>{
    console.log(req.url)
    next()
}
app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/blog",(req,res)=>{
    const ans=blog.list1()
    ans.map((item)=>(
        console.log(item.title)
    ))
    res.send(ans[1].title);
    
})
app.get('/login',logger,(req,res)=>{
    bcrypt.hash(password,saltRounds,(err,hashp)=>{
        if(err)
            res.send(err)
        else
        {
            res.send(hashp);
            const enteredpassword='1564';
            bcrypt.compare(enteredpassword,hashp,(err,result)=>{
                if(err)
                    res.send(err);
                else
                    console.log(result);
            })
        }
    })
})
