/**
 * Module - Docker Volume
 */

/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** List all volumes */
router.get('/', async (req, res) => {
    const path = "/volumes";
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Inspect a volume */
router.get('/:volumeId/inspect', async (req, res) => {
    const volumeID = req.params.volumeId;
    const path = `/volumes/${volumeID}`;
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove a volume */
router.delete('/:volumeId/remove', async (req, res) => {
    const volumeID = req.body.volumeId;
    const path = `/volumes/${volumeID}`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove unused volumes */
router.post('/prune', async (req, res) => {
    const path = `/volumes/prune`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

export default router;