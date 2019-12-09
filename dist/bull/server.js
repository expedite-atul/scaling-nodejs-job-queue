"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const bull_1 = __importDefault(require("bull"));
const execute_1 = require("../execute/execute");
const port = process.env.PORT || 3000;
const queue1 = new bull_1.default('message1', 'redis://127.0.0.1:6379');
const queue2 = new bull_1.default('message2', 'redis://127.0.0.1:6379');
const queue3 = new bull_1.default('message3', 'redis://127.0.0.1:6379');
const queue4 = new bull_1.default('message4', 'redis://127.0.0.1:6379');
let jobOptions1 = {
    delay: 60000,
    attempts: 2,
    timeout: 10,
    removeOnComplete: true,
    removeOnFail: true
};
let jobOptions2 = {
    delay: 120000,
    attempts: 2,
    timeout: 10,
    removeOnComplete: true,
    removeOnFail: true
};
let jobOptions3 = {
    delay: 180000,
    attempts: 2,
    timeout: 10,
    removeOnComplete: true,
    removeOnFail: true
};
let jobOptions4 = {
    delay: 240000,
    attempts: 2,
    timeout: 10,
    removeOnComplete: true,
    removeOnFail: true
};
/**
 * handler for root path
 * @param req
 * @param res
 */
function handleRequest(req, res) {
    // // queue.add('task', jobOptions).
    queue1.add({ test: 'test1' }, jobOptions1).then((job) => {
        execute_1.execute('./dist/bull/result-bull.txt', 'store', job.id);
        console.log(job.id);
        res.end(`{"status": ${job.id}}`);
    }).catch(e => { throw e; });
    queue2.add({ test: 'test2' }, jobOptions2).then((job) => {
        execute_1.execute('./dist/bull/result-bull2.txt', 'store', job.id);
        console.log(job.id);
        res.end(`{"status": ${job.id}}`);
    }).catch(e => { throw e; });
    queue3.add({ test: 'test3' }, jobOptions3).then((job) => {
        execute_1.execute('./dist/bull/result-bull3.txt', 'store', job.id);
        console.log(job.id);
        res.end(`{"status": ${job.id}}`);
    }).catch(e => { throw e; });
    queue4.add({ test: 'test4' }, jobOptions4).then((job) => {
        execute_1.execute('./dist/bull/result-bull4.txt', 'store', job.id);
        console.log(job.id);
        res.end(`{"status": ${job.id}}`);
    }).catch(e => { throw e; });
}
;
const server = http_1.default.createServer(handleRequest);
server.listen(port);
console.log('server up');
// queue.getDelayed().then((data) => console.log(data)).catch((e) => console.error(e));
// setTimeout(() => {
// job.remove().then(() => console.log('removed'));
// }, 10000);
