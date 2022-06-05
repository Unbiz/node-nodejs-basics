import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const removeFilePath = path.resolve(moduleDirname, 'files/fileToRemove.txt');

export const remove = async () => {
    try {
        await fsProm.rm(removeFilePath);
        console.log(`File removed successfully.`);
    } catch {
        throw new Error('FS operation failed');
    }
};

remove();