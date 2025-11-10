import type { Company } from '../../types';


export async function getCompanyAvatar(record: Partial<Company>): Promise<{
    src: string;
    title: string;
} | null> {
    if (!record.website) {
        return null;
    }

    return {
        src: 'https://placehold.co/1920/0606FC/0606FC?text=1',
        title: 'Company favicon',
    };

}
