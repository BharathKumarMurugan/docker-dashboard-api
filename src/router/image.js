/**
 * Module - Docker Image
 */

/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** List all images */
router.get('/', async (req, res) => {
    const path = '/images/json';
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Image Operations */
router.get('/:imageId/:action', async (req, res) => {
    const imageID = req.params.imageId;
    const action = req.params.action;
    const path = "";
    switch (action) {
        /** Inspect an image */
        case 'inspect':
            path = `/images/${imageID}/json`;
            break;
        /** Image history */
        case 'history':
            path = `/images/${imageID}/history`;
            break;
        default:
            console.log("Something went wrong");
            break;
    }
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Tag an image */
router.post('/:imageId/tag', async (req, res) => {
    const imageID = req.body.imageId;
    const path = `/images/${imageId}/tag`;
    try {
        const dockerResponse = await docker.postDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Delete unused images */
router.post('/prune', async (req, res) => {
    const path = '/images/prune';
    try {
        const dockerResponse = await docker.postDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove an image */
router.delete('/:imageId/remove', async (req, res) => {
    const imageID = req.body.imageId;
    const path = `/images/${imageID}`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
})
export default router;