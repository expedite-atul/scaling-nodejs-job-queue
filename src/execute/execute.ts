import fs from 'fs';

export const execute = (filename: any, action: any, id: any) => {
  fs.appendFileSync(filename, `${action},${id},${new Date()}\n`);
  return Promise.resolve();
};
