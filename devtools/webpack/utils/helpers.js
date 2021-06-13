
export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);
