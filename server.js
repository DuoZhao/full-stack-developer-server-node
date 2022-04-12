import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController  from "./controllers/user-controller.js";
import tuitController  from "./controllers/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb+srv://duke:200812@cluster0.e1k2p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/webdev');
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitController(app);
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT ||4000);
// app.listen(4000);
