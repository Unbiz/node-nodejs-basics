import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const childFilePath = path.resolve(moduleDirname, 'files/script.js');

export const spawnChildProcess = async (args) => {
    const child = fork(childFilePath, args);
    process.stdout.write('Please, input text\n(for quit press: "CTRL+C" or print: "CLOSE"):\n\n');
};

spawnChildProcess([1, 2, 3]);