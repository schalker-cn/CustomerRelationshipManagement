const LINKEDIN_URL_REGEX = /^http(?:s)?:\/\/(?:www\.)?linkedin.com\//;

export const isLinkedinUrl = (url: string) => {
    if (!url) return;
    try {
        const parsedUrl = new URL(url);
        if (!parsedUrl.href.match(LINKEDIN_URL_REGEX)) {
            return 'URL must be from linkedin.com';
        }
    } catch (e) {
        return 'Must be a valid URL';
    }
};
