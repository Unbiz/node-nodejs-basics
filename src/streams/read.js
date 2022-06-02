import fsProm from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(moduleDirname, 'files/fileToRead.txt');

export const read = async () => {
    const file = await fsProm.open(filePath);
    const readable = file.createReadStream();
    readable.pipe(process.stdout);
};

read();