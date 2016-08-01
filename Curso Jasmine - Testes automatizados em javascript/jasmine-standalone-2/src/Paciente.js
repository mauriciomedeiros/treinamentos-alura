function Paciente(nome, idade, peso, altura){

   var clazz = {
      imprime: function(){
         alert(nome + " tem " + idade + " anos");
      },

      batimentos: function(){
         // idade * qtd dias do ano * horas por dia * minutos * 80 (média de batimentos por minutos)
         return idade * 365 * 24 * 60* 80;
      },

      imc: function(){
         return peso / (altura * altura);
      }
   };
   return clazz;
}
