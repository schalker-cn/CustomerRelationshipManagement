import { random } from 'faker/locale/en_US';
import { staticDealNotes } from './staticObjects';
import { Db } from './types';
import { randomDate } from './utils';

export const generateDealNotes = (db: Db) => {
    return staticDealNotes.map((note, id) => {
        const deal = random.arrayElement(db.deals);
        return {
            id,
            deal_id: deal.id,
            text: note.text,
            date: randomDate(
                new Date(db.deals[deal.id as number].created_at)
            ).toISOString(),
            sales_id: deal.sales_id,
        };
    });
};
