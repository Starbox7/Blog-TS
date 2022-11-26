import express from "express"
import path from "path"
import { authRouter } from "./routes/auth"
import { userRouter } from "./routes/user"
import { postRouter } from "./routes/post"
import { replyRouter } from "./routes/reply"
import { uploadRouter } from "./routes/upload"

const app = express()
app.use(express.json())
app.use("/image", express.static(path.join(__dirname, "/upload")))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)
app.use("/api/reply", replyRouter)
app.use("/api/upload", uploadRouter)


app.listen(5000, () => {
    console.log("backend running")
})

//몽고db는 no sql로 형식이 자유로움
//yarn test