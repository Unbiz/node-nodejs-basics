import zlib from 'zlib';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFilePath = path.resolve(moduleDirname, 'files/fileToCompress.txt');
const compressFilePath = path.resolve(moduleDirname, 'files/archive.gz');

export const compress = async () => {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(baseFilePath);
    const destination = fs.createWriteStream(compressFilePath);

    source.pipe(gzip).pipe(destination);
};

compress();