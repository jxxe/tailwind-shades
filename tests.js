const shadesOf = require('.');

Object.entries({
    red: () => shadesOf('#ff0000')[50] === '#ffe6e6',
    shortColor: () => shadesOf('#800')[600] === '#660600',
    halfShadesRed: () => shadesOf('#ff0000', true)[50] === '#ffe6e6' && shadesOf('#ff0000', true)[150] === '#ffb3b3',
    halfShades: () => Object.values(shadesOf('#ff0000', true)).length === 18,
}).forEach(([name, test]) => {
    const result = test();
    console.log(`${name}: ${result ? 'PASS' : 'FAIL'}`);
});