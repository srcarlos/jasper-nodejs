/**
* File.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

connection: 'PostgresqlServer',
 // Define an adapter to use
  adapter: 'postgresql',

  attributes: {

    name : { type: 'string' }
  }
};

