/**
 * Module - Docker Network
 */

/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** List all networks */
router.get('/', async (req, res) => {
    const path = "/networks";
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Inspect a network */
router.get('/:networkId', async (req, res) => {
    const networkID = req.params.networkId;
    const path = `/networks/${networkID}`;
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove a network */
router.delete('/:networkId/remove', async (req, res) => {
    const networkID = req.body.networkId;
    const path = `/networks/${networkID}`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove unused networks */
router.post('/prune', async (req, res) => {
    const path = `/networks/prune`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Connect/Disconnect a container from network */
router.post('/:networkId/:action', async (res, req) => {
    const networkID = req.body.networkId;
    const action = req.body.action;
    const path = "";
    switch (action) {
        case 'connect':
            path = `/networks/${networkID}/connect`;
            break;
        case 'disconnect':
            path = `/networks/${networkID}/disconnect`;
            break;
        default:
            console.log("Something went wrong");
    }
    try {
        const dockerResponse = await docker.postDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
})

export default router;