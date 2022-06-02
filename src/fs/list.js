import { fileURLToPath } from 'url';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFolderPath = path.resolve(moduleDirname, 'files');

async function printFileInfo(file) {
    const filePath = path.join(baseFolderPath, file);
    const stat = await fsProm.stat(filePath);

    if (!stat.isDirectory()) {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const info = `${name}${ext}`;
        console.log(info);
    }
}

export const list = async () => {
    try {
        const files = await fsProm.readdir(baseFolderPath);

        for (const file of files) {
            printFileInfo(file);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

list();