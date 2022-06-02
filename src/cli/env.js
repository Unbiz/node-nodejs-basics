export const parseEnv = () => {
    const envVarPrefix = 'RSS_';
    const rssVarsArr = Object.entries(process.env).filter((varEl) => varEl[0].startsWith(envVarPrefix));
    const rssVarsStr = rssVarsArr.map((varEl) => `${varEl[0]}=${varEl[1]}`).join('; ');
    process.stdout.write(rssVarsStr);
};

parseEnv();
