import express from "express";
import dotenv from "dotenv";
import connect from "./utils/db.utils.js";

dotenv.config({path: './config.env'});
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { app ,server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth' , authRoutes);
app.use('/api/messages' , messageRoutes);
app.use('/api/users' , userRoutes);
// app.get("/" , (req ,res) => {
//     res.send("hello worlds");
// })

server.listen(PORT, async() => {
    console.log(`server is running at port ${PORT}`)
    await connect();
})