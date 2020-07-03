import express from "express";
import getDockerInfo from "../lib/dockerCon";

const router = express.Router();

const Router = () => {
    router.get('/', (req, res) => {
        res.send('Docker dashboard api');
    });
    router.get('/api/version', async (req, res) => {
        const path = '/version';
        try {
            const dockerResponse = await dockerCon.getDockerInfo(path);
            res.send(dockerResponse);
        } catch (error) {
            res.send(error)
        }
    });
    router.get('/api/info', async (req, res) => {
        const path = '/info';
        try {
            const dockerResponse = await getDockerInfo(path);
            res.send(dockerResponse);
        } catch (error) {
            res.send(error)
        }
    });
    router.get('/api/containers', async (req, res) => {
        const path = '/containers/json';
        try {
            const dockerResponse = await getDockerInfo(path);
            res.send(dockerResponse);
        } catch (error) {
            res.send(error)
        }
    });
    return router;
}
export default Router;