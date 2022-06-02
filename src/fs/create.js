import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const newFIlePath = path.resolve(moduleDirname, 'files/fresh.txt');

export const create = async () => {
    try {
        const fileText = 'I am fresh and young';
        const fileOptions = { encoding: 'utf8', flag: 'ax' };
        await fsProm.writeFile(newFIlePath, fileText, fileOptions);
        console.log(`File is created successfully.`);
    } catch {
        throw new Error('FS operation failed');
    }
};

create();