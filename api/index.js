const express =require('express');
const app=express()
const cors=require('cors')
// const multer=require('multer')
const cookieParser=require('cookie-parser')
app.use(express.json())
// app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())

const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
// app.use("/api/posts",postRoute)
// app.use("/api/comments",commentRoute)

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
