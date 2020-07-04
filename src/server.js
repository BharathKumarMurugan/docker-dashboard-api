import express from "express";
import bodyParser from "body-parser";
import router from "./router/index";

/** Constants */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router());
app.listen(3000, (req, res) => console.log('Application running at 3000 port'));