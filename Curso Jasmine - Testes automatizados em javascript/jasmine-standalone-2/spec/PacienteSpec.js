describe("Paciente", function(){

   it("deve calcular o imc", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var imc = mauricio.imc();
      expect(imc).toEqual(72 / (1.75 * 1.75));
   });

   it("deve calcular os batimentos do paciente", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var batimentos = mauricio.batimentos();
      expect(batimentos).toEqual(26 * 365 * 24 * 60* 80);
   });

});
