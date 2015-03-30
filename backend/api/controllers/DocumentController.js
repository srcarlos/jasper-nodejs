/**
 * DocumentController
 *
 * @description :: Server-side logic for managing documents
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	find : function (req,res) {

		Document.find().
		populate('files').exec(function(err,r){
			  // DB error
			  if (err) {
			    return res.send(error, 500);
			  }
			 console.log(r[0].toJSON())
			  return res.json(r);
		});
		
	},


  create: function (req, res) {
  	var params = req.params.all();


  Document.findOne(params).exec(function(error, documento) {


  console.log(documento);

  // DB error
  if (error) {
    return res.send(error, 500);
  }

  // Users exists
  if (documento && documento.length) {

    // Return validation error here
    return res.send({error: 'Document with that email already exists'}, 403.9);
  }

  // Document doesnt exist with that email
  Document.create(params).exec(function createCB(err,created) {
    // DB error
    if (err) {
      return res.send(err, 500);
    }
    // New user creation was successful
    return res.json(created);

  });

});


  	//  Document.create(params).exec(function createCB(err,created){
			// DB error
	
    	//	console.log (err);

    	//	console.log (created);

    		//return res.json({  
    		//					notice: 'Created user with name ' + created.name
    		//				});
  //});

   
  },

 
  destroy: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

	
};

