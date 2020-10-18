import express from "express";
import bodyParser from "body-parser";
import docker from "./router/docker";
import container from "./router/continer";
import image from "./router/image";
import network from "./router/network";
import volume from "./router/volume";

/** Constants */
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Routes */
app.use('/docker', docker);
app.use('/containers', container);
app.use('/images', image);
app.use('/networks', network);
app.use('/volumes', volume);

/** Publish port */
app.listen(port, (req, res) => console.log(`Server is running at port ${port}`));