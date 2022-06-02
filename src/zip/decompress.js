import zlib from 'zlib';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFilePath = path.resolve(moduleDirname, 'files/fileToCompress.txt');
const compressFilePath = path.resolve(moduleDirname, 'files/archive.gz');

export const decompress = async () => {
    const gunzip = zlib.createGunzip();
    const source = fs.createReadStream(compressFilePath);
    const destination = fs.createWriteStream(baseFilePath);

    source.pipe(gunzip).pipe(destination);
};

decompress();