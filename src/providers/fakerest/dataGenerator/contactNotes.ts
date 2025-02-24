import { random } from 'faker/locale/en_US';
import { staticContactNotes } from './staticObjects';
import { defaultNoteStatuses } from '../../../root/defaultConfiguration';
import { ContactNote } from '../../../types';
import { Db } from './types';
import { randomDate } from './utils';

export const generateContactNotes = (db: Db): ContactNote[] => {
    return staticContactNotes.map((note, id) => {
        const contact = random.arrayElement(db.contacts);
        const date = randomDate(new Date(contact.first_seen));
        contact.last_seen =
            date > new Date(contact.last_seen)
                ? date.toISOString()
                : contact.last_seen;
        return {
            id,
            contact_id: contact.id,
            text: note.text,
            date: date.toISOString(),
            sales_id: contact.sales_id,
            status: random.arrayElement(defaultNoteStatuses).value,
        };
    });
};
