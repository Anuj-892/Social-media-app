const express =require('express');
const app=express()
const cors=require('cors')
const multer=require('multer')
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

const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        console.log(req,file);
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        console.log(req,file);
        fn(null,Date.now()+file.originalname)
    }
})

const upload=multer({storage:storage})
app.post("/api/images",upload.single("file"),(req,res)=>{
    // console.log(req.body);
    if (!req.file) {
        // Handle the case where no file was uploaded
        console.log('no');
        res.status(400).send('No file uploaded.');
      } else {
        console.log('here');
        const filename = req.file.filename;
        console.log(filename);
        res.status(200).json(filename);
      }
})

app.listen(5000,()=>{
    console.log('listening');
});
