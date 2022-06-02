import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFilePath = path.resolve(moduleDirname, 'files/wrongFilename.txt');
const renamedFilePath = path.resolve(moduleDirname, 'files/properFilename.md');

export const rename = async () => {
    try {
        await fsProm.rename(baseFilePath, renamedFilePath);

        console.log(`File is renamed successfully.`);
    } catch {
        throw new Error('FS operation failed');
    }
};

rename();