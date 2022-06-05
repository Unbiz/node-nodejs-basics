import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFolderPath = path.resolve(moduleDirname, 'files');
const copyFolderPath = path.resolve(moduleDirname, 'files_copy');

export const copy = async () => {

    async function copyDir(baseFolderPath, copyFolderPath) {
        try {
            const files = await fsProm.readdir(baseFolderPath);
            await fsProm.mkdir(copyFolderPath);

            for await (const file of files) {
                const baseFile = path.join(baseFolderPath, file);
                const newFile = path.join(copyFolderPath, file);
                if (await (await fsProm.stat(baseFile)).isFile()) {
                    await fsProm.copyFile(baseFile, newFile);
                } else {
                    await copyDir(baseFile, newFile);
                }
            }
        } catch (err) {
            throw new Error('FS operation failed');
        }
    };
    await copyDir(baseFolderPath, copyFolderPath);
    console.log('Files are copied successfully.');
};

copy();