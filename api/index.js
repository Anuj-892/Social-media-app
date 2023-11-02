const express =require('express');
const app=express()
const cors=require('cors')
// const multer=require('multer')
const cookieParser=require('cookie-parser')

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true);
  next();
})
app.use(express.json())
// app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())

const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')
const postRoute=require('./routes/posts')
const likesRoute=require('./routes/likes')
const commentsRoute=require('./routes/comments')

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentsRoute)
app.use("/api/likes",likesRoute)

// const storage=multer.diskStorage({
//     destination:(req,file,fn)=>{
//         fn(null,"images")
//     },
//     filename:(req,file,fn)=>{
//         fn(null,req.body.img)
//     }
// })

// const upload=multer({storage:storage})
// app.post("/api/upload",upload.single("file"),(req,res)=>{
//     res.status(200).json("Image has been uploaded successfully!")
// })

app.listen(5000,()=>{
    console.log('listening');
});
