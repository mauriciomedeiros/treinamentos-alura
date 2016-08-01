describe("Consulta", function(){

   it("deve cobrar nada se a consulta for um retorno", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var consulta = new Consulta(mauricio, [], true, true);

      expect(consulta.preco()).toEqual(0);
   });

   it("deve cobrar 25 por cada procedimento comum", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var consulta = new Consulta(mauricio, ['proc1', 'proc2'], false, false);

      expect(consulta.preco()).toEqual(50);
   });

   it("deve dobrar o preco da consulta particular", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var consulta = new Consulta(mauricio, ['proc1', 'proc2'], true, false);

      expect(consulta.preco()).toEqual(50 * 2);
   });

   it("deve cobrar preco especifico dependendo do procedimento", function(){
      var mauricio = new Paciente("Mauricio", 26, 72, 1.75);
      var consulta = new Consulta(mauricio, ['procedimento-comum', 'raio-x', 'procedimento-comum2', 'gesso'], false, false);

      expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
   });
});
