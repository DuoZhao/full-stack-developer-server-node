import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController  from "./controllers/user-controller.js";
import tuitController  from "./controllers/tuits-controller.js";
import cors from 'cors';

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