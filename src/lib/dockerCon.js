import http from "http";
import CONTANSTS from "../util/constants";

/** GET Method - Docker API */
const getDocker = async customApi => {
    const options = {
        ...CONTANSTS.socketOptions,
        path: customApi,
        method: 'GET'
    }
    try {
        return await dockerResponse(options);
    } catch (error) {
        return error;
    }
}

/** POST Method - Docker API */
const postDocker = async customApi => {
    const options = {
        ...CONTANSTS.socketOptions,
        path: customApi,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        return await dockerResponse(options);
    } catch (error) {
        return error;
    }
}
const dockerResponse = options => {
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
export default { getDocker, postDocker };