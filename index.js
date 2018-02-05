`use strict`;

const Cryptopia = require('@cbank/cryptopia').default;

let internals = {
    key: '',
    secret: ''
};

const cryptopia = new Cryptopia(internals.key, internals.secret);

const promise = cryptopia.getTradePairs();

promise.then((pairs) => {

    // array of e.g.: { pair: ['BTC', '1CR'], minimalOrder: { amount: 0.0001, unit: 'asset' } },
    let tradePairs = [];

    for (let pair of pairs) {
        const baseMarket = pair['BaseSymbol'];
        const market = pair['Symbol'];
        const minimumBaseTrade = pair['MinimumBaseTrade'];
        const minimumPrice =
        const minimalOrder = pair['MinimumBaseTrade'];

        if (baseMarket && market && !isNaN(minimalOrder)) {
            const tradePair = {
                pair: [baseMarket, market],
                minimalOrder: {
                    amount: minimalOrder,
                    unit: 'asset'
                }
            };
            console.log(JSON.stringify(tradePair) + ",");
            tradePairs.push()
        }
    }

    // console.log(JSON.stringify(tradePairs) + "\nDone\n");

});
