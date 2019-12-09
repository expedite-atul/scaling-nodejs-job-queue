"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const execute_1 = require("../execute/execute");
const callback1 = new bull_1.default('message1', 'redis://127.0.0.1:6379');
const callback2 = new bull_1.default('message2', 'redis://127.0.0.1:6379');
const callback3 = new bull_1.default('message3', 'redis://127.0.0.1:6379');
const callback4 = new bull_1.default('message4', 'redis://127.0.0.1:6379');
callback1.process((job, done) => {
    execute_1.execute('./dist/bull/result-bull1.txt', 'execute', job.id);
    done();
    console.log(`executing jobs ${JSON.stringify(job.data)}`);
});
callback2.process((job, done) => {
    execute_1.execute('./dist/bull/result-bull2.txt', 'execute', job.id);
    done();
    console.log(`executing jobs ${JSON.stringify(job.data)}`);
});
callback3.process((job, done) => {
    execute_1.execute('./dist/bull/result-bull3.txt', 'execute', job.id);
    done();
    console.log(`executing jobs ${JSON.stringify(job.data)}`);
});
callback4.process((job, done) => {
    execute_1.execute('./dist/bull/result-bull4.txt', 'execute', job.id);
    done();
    console.log(`executing jobs ${JSON.stringify(job.data)}`);
});
