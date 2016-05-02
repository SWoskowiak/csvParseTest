'use strict';

/**
 * Builds a store of users from a provided csv string
 */
class BuildUsersFromCSV {
  /**
   * Takes optional csv file
   * @param  {String} csv String representing CSV data to read
   */
  constructor(csv) {
    this.store = [];
    // If the constructor was passed a CSV parse it
    if (csv) { this.parseCSV(csv); }
  }

  /**
   * Takes a user object and validates it's fields
   * @param  {Object}  user Object representing the user to check
   * @return {Boolean}      Return if this user passed validation or not
   */
  isValidUser(user) {
    // Simple checking that can be expanded later
    // Would probably also be a good idea to log problems here

    // Check if all fields are strings first
    if (
      typeof user.name === 'string' &&
      typeof user.age === 'string' &&
      typeof user.location === 'string'
    ) {
      // If we know all the fields are strings lets trim and validate length
      if (user.name.trim().length > 0 &&
          user.age.trim().length > 0 &&
          user.location.trim().length > 0
      ) {
        // We are a valid user with all strings as input and valid lengths
        return true;
      }
    }
    // Did not pass validation
    return false;
  }

  /**
   * Takes the deconstructed spread of a user object and process's it's fields
   * as well as validating them against some set of rules
   * This can help if we need to trim() or convert locations or check age etc.
   * @param  {Object} user      The user object to evaluate and process
   * @return {Mixed}            returns processed user Object or false if failed
   */
  processUser(user) {
    // Make sure we are valid first
    if (!this.isValidUser(user)) { return false; }
    // Return the processed user
    // We might want to encode/sanitize any potential nastiness here too
    return {
      name: user.name.trim(),
      age: user.age.trim(),
      location: user.location.trim()
    };
  }

  /**
   * Add a user to our store if it is valid
   * @param {String} userStr    A string representing a potential user E.X.: 'joe,23,CA'
   */
  addUser(userStr) {
    const user = userStr.split(','),
      newUser = {
        name: user[0],
        age: user[1],
        location: user[2]
      };
    // If the user passed vaidation/processing then add them to our store
    if (this.processUser(newUser)) {
      this.store.push(newUser);
    }
  }

  /**
   * Parses a csv file of users to add to a store
   * @param  {String} data    A string representing CSV data
   */
  parseCSV(data) {
    if (typeof data !== 'string') {
      return new Error('CSV data must be passed as a string to parseCSV');
    } else if (data.length < 1) {
      return new Error('CSV data must not be empty');
    }
    // Split the CSV and add the new user in
    data.split('\n').forEach(user => { this.addUser(user); });
  }
}

module.exports = BuildUsersFromCSV;
