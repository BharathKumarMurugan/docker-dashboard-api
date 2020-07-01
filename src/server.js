import express from "express";
import router from "./router/index";
const app = express();

app.use(router());
app.listen(3000, (req, res) => console.log('Application running at 3000 port'));