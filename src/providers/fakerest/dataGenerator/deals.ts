import { add } from 'date-fns';
import { lorem, random } from 'faker/locale/en_US';
import { staticDeals } from './staticObjects';
import {
    defaultDealCategories,
    defaultDealStages,
} from '../../../root/defaultConfiguration';
import { Deal } from '../../../types';
import { Db } from './types';
import { randomDate } from './utils';

export const generateDeals = (db: Db): Deal[] => {
    const deals = staticDeals.map((deal, id) => {
        const company = random.arrayElement(db.companies);
        company.nb_deals++;
        const contacts = random.arrayElements(
            db.contacts.filter(contact => contact.company_id === company.id),
            random.number({ min: 1, max: 3 })
        );
        const lowercaseName = deal.lowercaseName;
        const created_at = randomDate(
            new Date(company.created_at)
        ).toISOString();

        const expected_closing_date = randomDate(
            new Date(created_at),
            add(new Date(created_at), { months: 6 })
        ).toISOString();

        return {
            id,
            name: lowercaseName[0].toUpperCase() + lowercaseName.slice(1),
            company_id: company.id,
            contact_ids: contacts.map(contact => contact.id),
            category: random.arrayElement(defaultDealCategories),
            stage: random.arrayElement(defaultDealStages).value,
            description: deal.description,
            amount: random.number(1000) * 100,
            created_at,
            updated_at: randomDate(new Date(created_at)).toISOString(),
            expected_closing_date,
            sales_id: company.sales_id,
            index: 0,
        };
    });
    defaultDealStages.forEach(stage => {
        deals
            .filter(deal => deal.stage === stage.value)
            .forEach((deal, index) => {
                deals[deal.id].index = index;
            });
    });
    return deals;
};
