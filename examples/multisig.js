const morpheneJS = require('../lib');

const privWif1 = '5K2LA2ucS8b1GuFvVgZK6itKNE6fFMbDMX4GDtNHiczJESLGRd8';
const privWif2 = '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';

morpheneJS.broadcast.send({
  extensions: [],
  operations: [
    ['transfer', {
      to: 'initwitness',
      from: 'initwitness',
      amount: '1.000 MORPH',
      memo: "multi sig example"
    }]
  ]}, [privWif1, privWif2], (err, result) => {
  console.log(err, result);
});
