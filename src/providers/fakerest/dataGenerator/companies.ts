import { random } from 'faker/locale/en_US';
import { randomDate } from './utils';
import { defaultCompanySectors } from '../../../root/defaultConfiguration';
import { Company, RAFile } from '../../../types';
import { Db } from './types';
import { staticCompanies } from './staticObjects';

const sizes = [1, 10, 50, 250, 500];

export const generateCompanies = (db: Db): Required<Company>[] => {
    return staticCompanies.map((company, id) => ({
        id,
        name: company.name,
        logo: {
            title: `${company.name} Logo`,
            src: `./logos/placeholder.png`,
        } as RAFile,
        sector: random.arrayElement(defaultCompanySectors),
        size: random.arrayElement(sizes) as 1 | 10 | 50 | 250 | 500,
        linkedin_url: `https://www.linkedin.com/company/${company.name.replace(/\s+/g, '_').toLowerCase()}`,
        website: company.website,
        phone_number: company.phone_number,
        address: company.address,
        zipcode: company.zipcode,
        city: company.city,
        stateAbbr: company.stateAbbr,
        nb_contacts: 0,
        nb_deals: 0,
        sales_id: random.number(2) === 0 ? 0 : random.arrayElement(db.sales).id,
        created_at: randomDate().toISOString(),
        description: company.description,
        revenue: company.revenue,
        tax_identifier: `TAX${id}ID123`,
        country: company.country,
        context_links: [],
    }));
};
