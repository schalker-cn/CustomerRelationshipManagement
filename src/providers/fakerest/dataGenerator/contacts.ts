import { random } from 'faker/locale/en_US';
import { defaultContactGender, defaultNoteStatuses } from '../../../root/defaultConfiguration';
import { Company, Contact } from '../../../types';
import { Db } from './types';
import { randomDate, weightedBoolean } from './utils';
import { staticContacts } from './staticObjects';

const maxContacts = {
    1: 1,
    10: 4,
    50: 12,
    250: 25,
    500: 50,
};

export const generateContacts = (db: Db): Required<Contact>[] => {
    return staticContacts.map((contact, id) => {
        let company: Required<Company>;
        do {
            company = random.arrayElement(db.companies);
        } while (company.nb_contacts >= maxContacts[company.size]);
        company.nb_contacts++;

        const first_seen = randomDate(
            new Date(company.created_at)
        ).toISOString();
        const last_seen = first_seen;

        return {
            id,
            ...contact,
            gender: random.arrayElement(defaultContactGender).value,
            company_id: company.id,
            company_name: company.name,
            phone_1_type: random.arrayElement(['Work', 'Home', 'Other']),
            phone_2_type: random.arrayElement(['Work', 'Home', 'Other']),
            acquisition: random.arrayElement(['inbound', 'outbound']),
            avatar: {
                src: `./logos/placeholder.png`,
            },
            first_seen: first_seen,
            last_seen: last_seen,
            has_newsletter: weightedBoolean(30),
            status: random.arrayElement(defaultNoteStatuses).value,
            tags: random.arrayElements(db.tags, random.arrayElement([0, 0, 0, 1, 1, 2])).map(tag => tag.id),
            sales_id: company.sales_id,
            nb_tasks: 0,
            linkedin_url: null,
        };
    });
};
