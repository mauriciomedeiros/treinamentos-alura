function MaiorEMenor(){
   var _menor;
   var _maior;

   var clazz = {
      encontra: function(nums){
         _menor = Number.MAX_VALUE;
         _maior = Number.MIN_VALUE;

         nums.forEach(function(num){
            if(num < _menor) _menor = num;
            if(num > _maior) _maior = num;
         });
      },
      pegaMenor: function(){return _menor},
      pegaMaior: function(){return _maior}
   }
   return clazz;
}
