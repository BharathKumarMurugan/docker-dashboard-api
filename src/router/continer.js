/**
 * Module - Docker Container
 */

/** Import statements */
import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

/** Returns the Docker Engine version*/
router.get('/info', async (req, res) => {
    const path = '/info';
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** List all running containers */
router.get('/running', async (req, res) => {
    const path = '/containers/json';
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Delete stopped containers */
router.post('/prune', async (req, res) => {
    const path = `/containers/prune`;
    try {
        const dockerResponse = await docker.postDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** List all containers on the host machine */
router.get('/all', async (req, res) => {
    const path = '/containers/json?all=true';
    try {
        const dockerResponse = await docker.getDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Container Operations */
router.get('/:containerId/:action', async (req, res) => {
    const containerID = req.params.containerid;
    const action = req.params.action;
    const path = "";
    switch (action) {
        /** Inspect a container */
        case 'inspect':
            path = `/containers/${containerID}/json`;
            break;
        /** Log of a container */
        case 'logs':
            path = `/containers/${containerID}/logs`;
            break;
        /** Export a container */
        case 'export':
            path = `/containers/${containerID}/export`;
            break;
        /** List processes running inside a container */
        case 'process':
            path = `/containers/${containerID}/top`;
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

router.post('/:containerId/:action', async (req, res) => {
    const containerID = req.body.containerId;
    const action = req.body.action;
    const path = "";
    switch (action) {
        /** Start a container */
        case 'start':
            path = `/containers/${containerID}/start`;
            break;
        /** Stop a container */
        case 'stop':
            path = `/containers/${containerID}/stop`;
            break;
        /** Kill a container */
        case 'kill':
            path = `/containers/${containerID}/kill`;
            break;
        /** Restart a container */
        case 'restart':
            path = `/containers/${containerID}/restart`;
            break;
        /** Rename a container */
        case 'rename':
            break;
        /** Pause a container */
        case 'pause':
            path = `/containers/${containerID}/pause`;
            break;
        default:
            console.log("Something went wrong");
            break;
    }
    try {
        const dockerResponse = await docker.postDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

/** Remove a container */
router.delete('/:containerId/remove', async (req, res) => {
    const containerID = req.body.containerId;
    const path = `containers/${containerID}`;
    try {
        const dockerResponse = await docker.deleteDocker(path);
        res.send(dockerResponse);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

export default router;