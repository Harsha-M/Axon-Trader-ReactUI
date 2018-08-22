export const Portfolios = {
    items:  [
         {
             id: 1,
             portfolioName: 'Buyer 99',
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
             ],
             transactions: [
                 {
                     company: 'Shell',
                     type: 'BUY',
                     itemsCount: 10,
                     price: 40,
                     executedCount: 0,
                     state: 'CONFIRMED'
                 },
                 {
                     company: 'BP',
                     type: 'SELL',
                     itemsCount: 20,
                     price: 10,
                     executedCount: 30,
                     state: 'SELL'
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
             ],
             transactions: [
                 {
                     company: 'Shell',
                     type: 'BUY',
                     itemsCount: 10,
                     price: 40,
                     executedCount: 0,
                     state: 'CONFIRMED'
                 },
                 {
                     company: 'BP',
                     type: 'SELL',
                     itemsCount: 20,
                     price: 10,
                     executedCount: 30,
                     state: 'SELL'
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
             ],
             transactions: [
                 {
                     company: 'Shell',
                     type: 'BUY',
                     itemsCount: 10,
                     price: 40,
                     executedCount: 0,
                     state: 'CONFIRMED'
                 },
                 {
                     company: 'BP',
                     type: 'SELL',
                     itemsCount: 20,
                     price: 10,
                     executedCount: 30,
                     state: 'SELL'
                 }
             ]
         }
     ]
 }