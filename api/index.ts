import express from "express"
import { authRouter } from "./routes/auth"

const app = express()

app.use(express.json())
app.use("/api/auth", authRouter)

app.listen(5000, () => {
    console.log("backend running")
})

//몽고db는 no sql로 형식이 자유로움
//yarn test