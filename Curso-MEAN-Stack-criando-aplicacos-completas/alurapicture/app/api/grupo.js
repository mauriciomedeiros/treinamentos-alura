var api = {};

api.lista = function(req, res){
   var grupos = [
      {id: 1, nome: 'esportes'},
      {id: 2, nome: 'lugares'},
      {id: 3, nome: 'animais'}
   ];

   res.json(grupos);
};

module.exports = api;
