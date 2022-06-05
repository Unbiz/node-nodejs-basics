import fsProm from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import process from 'process';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(moduleDirname, 'files/fileToWrite.txt');

export const write = async () => {
    process.stdout.write('Please, add text to fileToWrite.txt\n(for quit press: "CTRL+C" or print: "CLOSE"):\n\n');
    const file = await fsProm.open(filePath, 'a');
    const writable = file.createWriteStream('utf8');

    process.stdin.on('data', (data) => {
        if (data.toString().includes('CLOSE')) process.exit(0);
    });

    process.stdin.pipe(writable);
};

write();