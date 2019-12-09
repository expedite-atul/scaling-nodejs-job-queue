"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
exports.execute = (filename, action, id) => {
    fs_1.default.appendFileSync(filename, `${action},${id},${new Date()}\n`);
    return Promise.resolve();
};
