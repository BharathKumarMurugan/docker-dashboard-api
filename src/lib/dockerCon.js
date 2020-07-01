import http from "http";
import CONTANSTS from "../util/constants";

const getDockerInfo = customApi => {
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
export default getDockerInfo;