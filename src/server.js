import express from "express";
import bodyParser from "body-parser";
import container from "./router/index";
import image from "./router/image";

/** Constants */
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Routes */
app.use('/containers', container);
app.use('/images', image);

/** Publish port */
app.listen(port, (req, res) => console.log(`Server is running at port ${port}`));