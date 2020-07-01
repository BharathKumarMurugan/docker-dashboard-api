const express = require('express');
const http = require('http');
const app = express();
const Docker = require('./lib/docker');

// const socketOptions = {
//     socketPath: '/var/run/docker.sock',
//     path: '/version'
// };

// const dockerConnect = http.get(socketOptions, data => {
//     data.on('data', chunk => {
//         res = JSON.parse(chunk + '');
//         console.log(res);
//     });
//     data.on('error', err => {
//         console.log(err);
//     });
// });
// dockerConnect.end();

const info = () => {
    return Docker.Client.get({
        url: '/info'
    })
}