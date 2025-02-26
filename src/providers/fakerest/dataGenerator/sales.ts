import { staticSales } from './staticObjects';

import { RAFile, Sale } from '../../../types';
import { Db } from './types';

export const generateSales = (_: Db): Sale[] => {
    const randomSales = staticSales.map((sale, id) => {
        const first_name = sale.first_name;
        const last_name = sale.last_name;
        const email = sale.email;

        return {
            id: id + 1,
            user_id: `${id + 1}`,
            first_name,
            last_name,
            email,
            password: 'demo',
            administrator: false,
        };
    });
    return [
        {
            id: 0,
            user_id: '0',
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'janedoe@atomic.dev',
            password: 'demo',
            administrator: true,
            avatar: {
                src: './logos/placeholder.png',
            } as RAFile,
        },
        ...randomSales,
    ];
};
