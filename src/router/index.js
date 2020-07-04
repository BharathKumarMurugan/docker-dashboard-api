import express from "express";
import docker from "../lib/dockerCon";

/** Constants */
const router = express.Router();

const Router = () => {
    router.get('/', (req, res) => {
        res.send('Docker dashboard api');
    });

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
    router.get('/containers', async (req, res) => {
        const path = '/containers/json';
        try {
            const dockerResponse = await docker.getDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send("Something went wrong");
        }
    });

    /** List all containers on the host machine */
    router.get('/containers', async (req, res) => {
        const path = '/containers/json?all=true';
        try {
            const dockerResponse = await docker.getDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send("Something went wrong");
        }
    });

    /** Inspect a container */
    router.get('/containers/:containerId/inspect', async (req, res) => {
        const containerID = req.params.containerid;
        const path = `/containers/${containerID}/json`;
        try {
            const dockerResponse = await docker.getDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send("Something went wrong");
        }
    });

    /** Start a container */
    router.post('/containers/:containerId/start', async (req, res) => {
        const containerID = req.body.containerId;
        const path = `/containers/${containerID}/start`;
        try {
            const dockerResponse = await docker.postDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.send({
                status: error.status,
                message: error.message
            });            
        }
    });

    /** Stop a container */
    router.post('/containers/:containerId/stop', async (req, res) => {
        const containerID = req.body.containerId;
        const path = `/containers/${containerID}/stop`;
        try {
            const dockerResponse = await docker.postDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send("Something went wrong");            
        }
    });

    /** Kill a container */
    router.post('/containers/:containerId/kill', async (req, res) => {
        const containerID = req.body.containerid;
        const path = `/containers/${containerID}/kill`;
        try {
            const dockerResponse = await docker.postDocker(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send("Something went wrong");            
        }
    });

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

    return router;
}
export default Router;