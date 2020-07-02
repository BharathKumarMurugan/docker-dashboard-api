import express from "express";
import dockerCon from "../lib/dockerCon";

const router = express.Router();

const Router = () => {
    router.get('/', (req, res) => {
        res.send('Docker dashboard api');
    });
    router.get('/version', async (req, res) => {
        const path = '/version';
        try {
            const dockerResponse = await dockerCon.getDockerInfo(path);
            res.send(dockerResponse);
        } catch (error) {
            res.status(500).send(error)
        }
    });
    return router;
}
export default Router;