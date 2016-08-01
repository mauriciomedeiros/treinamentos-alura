function Consulta(paciente, procedimentos, particular, retorno){
   var clazz = {
      preco: function(){
         if(retorno) return 0;
         var _precoFinal = 0;

         procedimentos.forEach(function(procedimento){
            if('raio-x' == procedimento) _precoFinal += 55;
            else if('gesso' == procedimento) _precoFinal += 32;
            else _precoFinal += 25;
         });

         if(particular) _precoFinal *= 2;
         return _precoFinal;
      }
   }
   return clazz;
}
