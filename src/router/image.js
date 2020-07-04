/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** List all images */
router.get('/images', async (req, res) => {
    const path = '/images/json';
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Inspect an image */
router.get('/images/:imageId/inspect', async (req, res) => {
    const imageID = req.params.imageId;
    const path = `/images/${imageID}/json`;
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

export default router;