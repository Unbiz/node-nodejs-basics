import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFolderPath = path.resolve(moduleDirname, 'files');

export const list = async () => {
    try {
        const files = (await fsProm.readdir(baseFolderPath, { withFileTypes: true }))
            .filter(file => !file.isDirectory())
            .map(file => file.name);

        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

list();