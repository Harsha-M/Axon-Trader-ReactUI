export default function() {
    return [
        {
            id: 1,
            portfolioName: 'Buyer 1',
            moneyAvailable: 10000,
            reserved: 720,
            itemsAvailable: [
                {
                    name: 'Shell',
                    count: 20
                },
                {
                    name: 'BP',
                    count: 20
                },
                {
                    name: 'Apple',
                    count: 10
                }
            ]
        },
        {
            id: 2,
            portfolioName: 'Buyer 2',
            moneyAvailable: 30000,
            reserved: 520,
            itemsAvailable: [
                {
                    name: 'Google',
                    count: 10
                },
                {
                    name: 'FB',
                    count: 2
                },
                {
                    name: 'Apple',
                    count: 50
                }
            ]
        },
        {
            id: 3,
            portfolioName: 'Buyer 3',
            moneyAvailable: 5000,
            reserved: 80,
            itemsAvailable: [
                {
                    name: 'Pivotal',
                    count: 10
                },
                {
                    name: 'Home Depot',
                    count: 5
                }
            ]
        }
    ]
}