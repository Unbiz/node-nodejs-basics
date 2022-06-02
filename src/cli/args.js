export const parseArgs = () => {
    const argsStr = process.argv
        .slice(2)
        .map((item, i) => i % 2 === 0 ? `${item.slice(2)} is` : `${item},`)
        .join(' ');

    process.stdout.write(argsStr.slice(0, argsStr.length - 1));
};

parseArgs();