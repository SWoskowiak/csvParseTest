'use strict';

const BuildUsersFromCSV = require('./index'),
  BUFCSV = new BuildUsersFromCSV();

const csv = `
  john,21,CA
  jane,30,NY
  mike,,
  badFields
  ,,,,,
  jake,1000,CA,Joe,100,VT
  jim,20,OR
`;

BUFCSV.parseCSV(csv);

console.log(BUFCSV.store);
