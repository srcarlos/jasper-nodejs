/**
* File.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

connection: 'PostgresqlServer',

  attributes: {

  	id: {
    	type: 'integer',
    	primaryKey: true,
    	autoIncrement: true
  	},

    name : {
     type: 'string' 
 	},
 	path : {
     type: 'string' 
 	},
    
    fk_document:{
    type: 'integer',
	foreignKey: true,
    model: 'document'
    },

// TREE parentID 
    parentId:{
    type: 'integer',
	foreignKey: true,
    model: 'file'
    },
    parent:{
      collection: "file",
      via: "parentId"
    }

  }
};

