import express from "express";
import getDockerInfo from "../lib/dockerCon";

const router = express.Router();

const Router = () => {
    router.get('/', (req, res) => {
        res.send('Docker dashboard api');
    });
    router.get('/info', async (req, res) => {
        const path = '/containers/json';
        try {
            const dockerResponse = await getDockerInfo(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send(error)
        }
    });
    return router;
}
export default Router;