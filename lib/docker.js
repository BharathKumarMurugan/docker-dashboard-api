'use strict';

const http = require('http');
const _ = require('lodash');
const { resolve } = require('path');
const { reject } = require('lodash');

// class DockerClient{
//     info(){
//         return http.get({
//             url: '/info'
//         })
//     }
// }

class DockerClient {
    constructor() {
        const socketOptions = {
            socketPath: '/var/run/docker.sock',
            version: '1.40'
        }
    };
    get(url) {
        socketOptions.path = url;
        return new Promise((resolve, reject) => {
            const clientReq = http.get(options, data => {
                data.on('data', chunk => {
                    const res = JSON.parse(chunk + '');
                    resolve(res);
                });
                data.on('error', err => {
                    reject(err)
                });
            });
            clientReq.end();
        })
    }
}

module.exports.Client = function () {
    return new DockerClient();
};