import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const moduleDirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.resolve(moduleDirname, 'worker.js');

export const performCalculations = async () => {
    function getWorker(workerData) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject();
            });
        });
    }

    const workers = [];

    for (let i = 10; i <= 13; i += 1) {
        workers.push(getWorker(i));
    }

    const workersResults = await Promise.allSettled(workers).then((data) => {
        const results = data.map((item) => {
            if (item.status === 'fulfilled') {
                return { status: 'resolved', value: item.value };
            }

            return { status: 'error', value: null };
        });

        return results;
    });

    console.log(workersResults);
    return workersResults;
};

performCalculations();