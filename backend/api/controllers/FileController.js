/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

  find : function (req,res) {

    File.find().populateAll().exec(function(err,r){
        // DB error
        if (err) {
          return res.send(error, 500);
        }
       console.log(r[0].toJSON())
        return res.json(r);
    });
    
  },
  /**
   * `FileController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `FileController.create()`
   */
  create: function (req, res) {
      var params = req.params.all();

    console.log(params);

    var data = 
      { name: params.name,
        fk_document: params.fk_document,
        parentId: params.parentId,
      };

  File.findOne(data).exec(function(error, file) {


  console.log(file);

  // DB error
  if (error) {
    return res.send(error, 500);
  }

  // file exists
  if (file && file.length) {

    // Return validation error here
    return res.send({error: 'file with that params already exists'}, 403.9);
  }

  // File doesnt exist with that email
  File.create(data).exec(function createCB(err,created) {
    // DB error
    if (err) {
      return res.send(err, 500);
    }
    // New user creation was successful
    return res.json(created);

  });

});
  },


  /**
   * `FileController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `FileController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `FileController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

