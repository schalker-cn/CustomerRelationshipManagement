import { random } from 'faker/locale/en_US';
import { defaultTaskTypes } from '../../../root/defaultConfiguration';
import { Db } from './types';
import { randomDate } from './utils';
import { staticTasks } from './staticObjects';

type TaskType = (typeof defaultTaskTypes)[number];

export const type: TaskType[] = [
    'Email',
    'Email',
    'Email',
    'Email',
    'Email',
    'Email',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Demo',
    'Lunch',
    'Meeting',
    'Follow-up',
    'Follow-up',
    'Thank you',
    'Ship',
    'None',
];

export const generateTasks = (db: Db) => {
    return staticTasks.map((task, id) => {
        const contact = random.arrayElement(db.contacts);
        contact.nb_tasks++;
        return {
            id,
            contact_id: contact.id,
            type: random.arrayElement(defaultTaskTypes),
            text: task.text,
            due_date: randomDate(
                random.boolean() ? new Date() : new Date(contact.first_seen),
                new Date(Date.now() + 100 * 24 * 60 * 60 * 1000)
            ).toISOString(),
            done_date: undefined,
            sales_id: 0,
        };
    })
}
