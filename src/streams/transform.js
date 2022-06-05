import process from 'process';
import stream from 'stream';

export const transform = async () => {
    process.stdout.write('Please, input text\n(for quit press: "CTRL+C" or print: "CLOSE"):\n\n');
    const transformStream = new stream.Transform();
    transformStream._transform = (chunk, encoding, callback) => {
        const reversedStr = Array.from(chunk.toString()).reverse().join('').slice(2);
        transformStream.push(`${reversedStr}\n\n`);
        callback();
    };

    process.stdin.on('data', (data) => {
        if (data.toString().includes('CLOSE')) process.exit(0);
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);

};

transform();