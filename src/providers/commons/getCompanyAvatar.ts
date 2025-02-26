import type { Company } from '../../types';


export async function getCompanyAvatar(record: Partial<Company>): Promise<{
    src: string;
    title: string;
} | null> {
    if (!record.website) {
        return null;
    }

    return {
        src: './logos/placeholder.png',
        title: 'Company favicon',
    };

}
