import shadesOf from './index.js';

Object.entries({
    red: () => shadesOf('#ff0000')[50] === '#ffe6e6',
    shortColor: () => shadesOf('#800')[600] === '#660600'
}).forEach(([name, test]) => {
    const result = test();
    console.log(`${name}: ${result ? 'PASS' : 'FAIL'}`);
});