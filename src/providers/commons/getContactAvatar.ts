import { DOMAINS_NOT_SUPPORTING_FAVICON } from '../../misc/unsupportedDomains.const';
import { fetchWithTimeout } from '../../misc/fetchWithTimeout';
import { Contact } from '../../types';

export async function hash(string: string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(bytes => bytes.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}

async function getGravatarUrl(email: string): Promise<string> {
    const hashEmail = await hash(email);
    return `https://www.gravatar.com/avatar/${hashEmail}?d=404`;
}

async function getFaviconUrl(domain: string): Promise<string | null> {
    if (DOMAINS_NOT_SUPPORTING_FAVICON.includes(domain)) {
        return null;
    }

    try {
        const faviconUrl = `https://${domain}/favicon.ico`;
        const response = await fetchWithTimeout(faviconUrl);
        if (response.ok) {
            return faviconUrl;
        }
    } catch (error) {
        return null;
    }
    return null;
}

export async function getContactAvatar(
    record: Partial<Contact>
): Promise<string | null> {
    if (!record.email) {
        return null;
    }

    const gravatarUrl = await getGravatarUrl(record.email);
    try {
        const gravatarResponse = await fetch(gravatarUrl);
        if (gravatarResponse.ok) {
            return gravatarUrl;
        }
    } catch (error) {

    }

    const domain = record.email.split('@')[1];
    const faviconUrl = await getFaviconUrl(domain);
    if (faviconUrl) {
        return faviconUrl;
    }


    return null;
}
