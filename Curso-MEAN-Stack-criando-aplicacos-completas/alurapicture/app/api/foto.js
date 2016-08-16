var mongoose = require('mongoose');
var api = {};

api.lista = function(req, res){

   var model = mongoose.model('Foto');

   model.find({})
         .then(function(fotos){
            res.json(fotos);
         }, function(error){
            console.log(error);
            res.status(500).json(error);
         });
};

api.buscaPorId = function(req, res){
   var model = mongoose.model('Foto');
   model.findOne({_id: req.params.id})
      .then(function(foto){
         res.json(foto);
      }, function(error){
         console.log(error);
         res.status(500).json(error);
      });
};

api.removePorId = function(req, res){
   var model = mongoose.model('Foto');
   model.remove({_id: req.params.id})
      .then(function(foto){
         res.sendStatus(204);
      }, function(error){
         console.log(error);
         res.status(500).json(error);
      });
};

api.adiciona = function(req, res){

};

api.atualiza = function(req, res){

};

module.exports = api;
