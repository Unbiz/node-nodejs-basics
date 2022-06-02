import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFolderPath = path.resolve(moduleDirname, 'files');
const copyFolderPath = path.resolve(moduleDirname, 'files_copy');

export const copy = async () => {
    try {
        const files = await fsProm.readdir(baseFolderPath);
        await fsProm.mkdir(copyFolderPath);

        for (const file of files) {
            const baseFile = path.join(baseFolderPath, file);
            const newFile = path.join(copyFolderPath, file);
            await fsProm.copyFile(baseFile, newFile);
        }

        console.log(`Folder is copied successfully.`);
    } catch {
        throw new Error('FS operation failed');
    }
};

copy();