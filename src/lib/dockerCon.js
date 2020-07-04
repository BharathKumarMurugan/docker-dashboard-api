import http from "http";
import CONTANSTS from "../util/constants";

/** GET Method - Docker API */
const getDocker = customApi => {
    const options = {
        ...CONTANSTS.socketOptions, path: customApi
    }
    return new Promise((resolve, reject) => {
        const clientRequest = http.get(options, function (data) {
            data.on('data', chunk => {
                const res = JSON.parse(chunk + '');
                resolve(res)
            });
            data.on('error', err => {
                reject(err)
            });
        });
        clientRequest.end();
    })
}

/** POST Method - Docker API */
const postDocker = customApi => {
    const options = {
        ...CONTANSTS.socketOptions,
        path: customApi,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return new Promise((resolve, reject) => {
        const clientRequest = http.request(options, function (data) {
            data.on('data', chunk => {
                const res = JSON.parse(chunk + '');
                resolve(res)
            });
            data.on('error', err => {
                reject(err)
            });
        });
        clientRequest.end();
    })
}
export default getDocker;
export default postDocker;