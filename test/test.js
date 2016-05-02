'use strict';

const expect = require('chai').expect,
  BuildUsersFromCSV = require('../index');

describe('Class: Build Users From CSV', function () {
  // Test CSV with a load of crud data
  const csv = `
    john,21,CA
    jane,30,NY
    mike,,
    badFields
    ,,,,,
    jake,1000,CA,Joe,100,VT
    jim,20,OR
  `;
  let BUFCSV;

  // Before each test reset BuildUsersFromCSV object
  beforeEach(() => {
    BUFCSV = new BuildUsersFromCSV();
  });

  // Test parseCSV run throughs
  describe('Method: parseCSV', function () {
    it('Rejects non-string input', () => {
      expect(BUFCSV.parseCSV(123)).to.be.an('error');
    });

    it('Rejects 0 length input', () => {
      expect(BUFCSV.parseCSV('')).to.be.an('error');
    });

    it('Pulls correct number of users given dirty input', () => {
      BUFCSV.parseCSV(csv);
      // The test CSV
      expect(BUFCSV.store).to.be.an('array').with.length(4);
    });
  });

  // NOTE: This would be a good spot to test the individual functions we utilize in our BuildUsersFromCSV class
});
