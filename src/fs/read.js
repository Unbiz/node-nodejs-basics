import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFilePath = path.resolve(moduleDirname, 'files/fileToRead.txt');

export const read = async () => {
    try {
        const fileContent = await fsProm.readFile(baseFilePath, 'utf8');
        console.log(fileContent);
    } catch {
        throw new Error('FS operation failed');
    }
};

read();