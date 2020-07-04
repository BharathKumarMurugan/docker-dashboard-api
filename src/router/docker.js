/**
 * Module - Docker Engine
 */

/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** Docker - system wide information */
router.get('/info', async (req, res) => {
    const path = "/info?";
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Docker version */
router.get('/version', async (req, res) => {
    const path = "/version?";
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

export default router;