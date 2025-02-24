/*
included data:
8 contacts
5 companies
8 tasks
10 deals
10 contact notes
10 deal notes
*/
export const staticContacts = [
    {
        first_name: 'John',
        last_name: 'Doe',
        title: 'Manager',
        email: 'john.doe@example.com',
        phone_1_number: '123-456-7890',
        phone_2_number: '987-654-3210',
        background: 'Experienced sales manager.',
    },
    {
        first_name: 'Jane',
        last_name: 'Smith',
        title: 'Developer',
        email: 'jane.smith@example.com',
        phone_1_number: '234-567-8901',
        phone_2_number: '876-543-2109',
        background: 'Skilled software engineer with a focus on frontend development.',
    },
    {
        first_name: 'Alice',
        last_name: 'Johnson',
        title: 'HR Specialist',
        email: 'alice.johnson@example.com',
        phone_1_number: '345-678-9012',
        phone_2_number: '765-432-1098',
        background: 'HR professional with experience in recruitment and employee relations.',
    },
    {
        first_name: 'Bob',
        last_name: 'Brown',
        title: 'Product Manager',
        email: 'bob.brown@example.com',
        phone_1_number: '456-789-0123',
        phone_2_number: '654-321-0987',
        background: 'Product manager with expertise in mobile applications.',
    },
    {
        first_name: 'Charlie',
        last_name: 'Davis',
        title: 'Sales Representative',
        email: 'charlie.davis@example.com',
        phone_1_number: '567-890-1234',
        phone_2_number: '543-210-9876',
        background: 'Sales expert with a focus on B2B solutions.',
    },
    {
        first_name: 'David',
        last_name: 'Martinez',
        title: 'Marketing Director',
        email: 'david.martinez@example.com',
        phone_1_number: '678-901-2345',
        phone_2_number: '432-109-8765',
        background: 'Experienced marketing leader specializing in digital campaigns.',
    },
    {
        first_name: 'Eva',
        last_name: 'Garcia',
        title: 'Graphic Designer',
        email: 'eva.garcia@example.com',
        phone_1_number: '789-012-3456',
        phone_2_number: '321-098-7654',
        background: 'Creative graphic designer with a passion for brand identity.',
    },
    {
        first_name: 'Frank',
        last_name: 'Wilson',
        title: 'Data Analyst',
        email: 'frank.wilson@example.com',
        phone_1_number: '890-123-4567',
        phone_2_number: '210-987-6543',
        background: 'Data analyst with experience in business intelligence tools.',
    },
];

export const staticCompanies = [
    {
        name: "Alpha Technologies",
        website: "https://www.alphatech.com",
        phone_number: "(123) 456-7890",
        address: "123 Alpha Street",
        zipcode: "10001",
        city: "New York",
        stateAbbr: "NY",
        revenue: "$10M",
        country: "USA",
        description: "Leading provider of AI-driven solutions."
    },
    {
        name: "Beta Innovations",
        website: "https://www.betainno.com",
        phone_number: "(987) 654-3210",
        address: "456 Beta Avenue",
        zipcode: "90001",
        city: "Los Angeles",
        stateAbbr: "CA",
        revenue: "$100M",
        country: "USA",
        description: "Pioneers in blockchain and security technologies."
    },
    {
        name: "Gamma Solutions",
        website: "https://www.gammasol.com",
        phone_number: "(555) 123-4567",
        address: "789 Gamma Blvd",
        zipcode: "60601",
        city: "Chicago",
        stateAbbr: "IL",
        revenue: "$1B",
        country: "USA",
        description: "Cloud computing and big data experts."
    },
    {
        name: "Delta Systems",
        website: "https://www.deltasys.com",
        phone_number: "(321) 654-9870",
        address: "101 Delta Road",
        zipcode: "75001",
        city: "Dallas",
        stateAbbr: "TX",
        revenue: "$1M",
        country: "USA",
        description: "Innovators in embedded systems and IoT."
    },
    {
        name: "Epsilon Networks",
        website: "https://www.epsilonnet.com",
        phone_number: "(777) 888-9999",
        address: "202 Epsilon Lane",
        zipcode: "94101",
        city: "San Francisco",
        stateAbbr: "CA",
        revenue: "$10M",
        country: "USA",
        description: "Next-gen networking and cybersecurity solutions."
    }
];

export const staticTasks = [
    { text: 'Follow up with client about contract details' },
    { text: 'Send product demo invitation email' },
    { text: 'Schedule a call with potential partner' },
    { text: 'Review and finalize marketing strategy document' },
    { text: 'Prepare sales report for Q1' },
    { text: 'Organize team lunch for project kickoff' },
    { text: 'Send thank-you email to new customers' },
    { text: 'Ship promotional materials to conference venue' },
];

export const staticDeals = [
    { lowercaseName: 'website redesign', description: 'Redesign the company website to improve user experience and increase conversions.' },
    { lowercaseName: 'enterprise software integration', description: 'Integrate our software solution with the client’s enterprise system for better data synchronization.' },
    { lowercaseName: 'customer loyalty program', description: 'Develop a loyalty program to enhance customer retention and engagement.' },
    { lowercaseName: 'marketing automation setup', description: 'Implement automation tools to streamline marketing campaigns and increase efficiency.' },
    { lowercaseName: 'supply chain optimization', description: 'Analyze and improve supply chain processes to reduce costs and enhance delivery times.' },
    { lowercaseName: 'B2B partnership deal', description: 'Establish a strategic partnership with another company to expand market reach.' },
    { lowercaseName: 'product launch campaign', description: 'Plan and execute a marketing campaign for the launch of a new product.' },
    { lowercaseName: 'mobile app development', description: 'Develop a mobile application to complement our web platform and increase accessibility.' },
    { lowercaseName: 'corporate training package', description: 'Provide a customized corporate training package for employee upskilling.' },
    { lowercaseName: 'international expansion strategy', description: 'Develop a strategy to enter new international markets and increase global presence.' },
];

export const staticContactNotes = [
    { text: 'Discussed potential collaboration opportunities with the client.' },
    { text: 'Client mentioned interest in upgrading their current subscription plan.' },
    { text: 'Follow-up required regarding the feedback on the latest product demo.' },
    { text: 'Scheduled a meeting to go over contract details next Monday.' },
    { text: 'Client expressed concerns about the pricing structure.' },
    { text: 'Noted a strong interest in integrating our API with their system.' },
    { text: 'Customer requested additional documentation on the onboarding process.' },
    { text: 'Discussed new market trends affecting their business strategy.' },
    { text: 'Client is happy with the latest update and provided positive feedback.' },
    { text: 'Reminder: Send a thank-you email for the successful project completion.' },
];

export const staticDealNotes = [
    { text: 'Discussed initial contract terms with the client and awaiting their feedback.' },
    { text: 'Client requested a breakdown of the implementation costs before proceeding.' },
    { text: 'Follow-up scheduled for next week to finalize the payment structure.' },
    { text: 'Legal team reviewed the contract, and a few modifications are needed.' },
    { text: 'Customer expressed interest in an extended support package for post-deployment.' },
    { text: 'Negotiation on pricing is ongoing, awaiting client’s counteroffer.' },
    { text: 'Client requested additional case studies to justify ROI expectations.' },
    { text: 'Confirmed that the project timeline aligns with the client’s internal deadlines.' },
    { text: 'Sales team provided a customized proposal based on the client’s requirements.' },
    { text: 'Meeting scheduled with the client’s CEO to finalize the partnership details.' },
];
