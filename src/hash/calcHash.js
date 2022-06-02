import { fileURLToPath } from 'url';
import crypto from 'crypto';
import fsProm from 'fs/promises';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const baseFilePath = path.resolve(moduleDirname, 'files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const fileText = await fsProm.readFile(baseFilePath, 'utf8');
    const hash = crypto.createHash('sha256').update(fileText).digest('hex');
    console.log(`Hash of ${baseFilePath} is ${hash}`);
    return hash;
};

calculateHash();