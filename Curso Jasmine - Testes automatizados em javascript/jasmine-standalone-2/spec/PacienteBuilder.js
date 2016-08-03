function PacienteBuilder(){
   var _nome = "mauricio";
   var _idade = 26;
   var _peso = 72;
   var _altura =1.75;

   var clazz = {
      constroi: function(){
         return Paciente(_nome, _idade, _peso, _altura);
      },

      comIdade: function(valor){
         _idade = valor;
         return this;
      },

      comPeso: function(valor){
         _peso = valor;
         return this;
      }
   };

   return clazz;
}
