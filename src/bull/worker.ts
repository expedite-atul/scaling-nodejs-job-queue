import Queue from 'bull';
import { execute } from '../execute/execute';

const callback1 = new Queue('message1', 'redis://127.0.0.1:6379');
const callback2 = new Queue('message2', 'redis://127.0.0.1:6379');
const callback3 = new Queue('message3', 'redis://127.0.0.1:6379');
const callback4 = new Queue('message4', 'redis://127.0.0.1:6379');

callback1.process((job, done) => {
  execute('./dist/bull/result-bull1.txt', 'execute', job.id);
  done();
  console.log(`executing jobs ${JSON.stringify(job.data)}`);
});

callback2.process((job, done) => {
  execute('./dist/bull/result-bull2.txt', 'execute', job.id);
  done();
  console.log(`executing jobs ${JSON.stringify(job.data)}`);
});

callback3.process((job, done) => {
  execute('./dist/bull/result-bull3.txt', 'execute', job.id);
  done();
  console.log(`executing jobs ${JSON.stringify(job.data)}`);
});

callback4.process((job, done) => {
  execute('./dist/bull/result-bull4.txt', 'execute', job.id);
  done();
  console.log(`executing jobs ${JSON.stringify(job.data)}`);
});
