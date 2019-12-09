import http, { ServerResponse, IncomingMessage } from 'http';
import Queue from 'bull';
import { execute } from '../execute/execute';

const port = process.env.PORT || 3000;

const queue1 = new Queue('message1', 'redis://127.0.0.1:6379');
const queue2 = new Queue('message2', 'redis://127.0.0.1:6379');
const queue3 = new Queue('message3', 'redis://127.0.0.1:6379');
const queue4 = new Queue('message4', 'redis://127.0.0.1:6379');


/**
 * queue add options
 */
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

function handleRequest(req: IncomingMessage, res: ServerResponse) {
  // // queue.add('task', jobOptions).

  queue1.add({ test: 'test1' }, jobOptions1).then((job: any) => {
    execute('./dist/bull/result-bull.txt', 'store', job.id);
    console.log(job.id);
    res.end(`{"status": ${job.id}}`);
  }).catch(e => { throw e; });

  queue2.add({ test: 'test2' }, jobOptions2).then((job: any) => {
    execute('./dist/bull/result-bull2.txt', 'store', job.id);
    console.log(job.id);
    res.end(`{"status": ${job.id}}`);
  }).catch(e => { throw e; });

  queue3.add({ test: 'test3' }, jobOptions3).then((job: any) => {
    execute('./dist/bull/result-bull3.txt', 'store', job.id);
    console.log(job.id);
    res.end(`{"status": ${job.id}}`);
  }).catch(e => { throw e; });

  queue4.add({ test: 'test4' }, jobOptions4).then((job: any) => {
    execute('./dist/bull/result-bull4.txt', 'store', job.id);
    console.log(job.id);
    res.end(`{"status": ${job.id}}`);
  }).catch(e => { throw e; });
};

const server = http.createServer(handleRequest);

server.listen(port);
console.log('server up');
