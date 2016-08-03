describe("Consulta", function(){
   var _mauricio;

   beforeEach(function(){
      _mauricio = new PacienteBuilder().constroi();
   });

   describe("consulta do tipo retorno", function(){
      it("deve cobrar nada se a consulta for um retorno", function(){
         var consulta = new Consulta(_mauricio, [], true, true);

         expect(consulta.preco()).toEqual(0);
      });
   });

   describe("consulta com procedimentos", function(){
      it("deve cobrar 25 por cada procedimento comum", function(){
         var consulta = new Consulta(_mauricio, ['proc1', 'proc2'], false, false);

         expect(consulta.preco()).toEqual(50);
      });

      it("deve dobrar o preco da consulta particular", function(){
         var consulta = new Consulta(_mauricio, ['proc1', 'proc2'], true, false);

         expect(consulta.preco()).toEqual(50 * 2);
      });

      it("deve cobrar preco especifico dependendo do procedimento", function(){
         var consulta = new Consulta(_mauricio, ['procedimento-comum', 'raio-x', 'procedimento-comum2', 'gesso'], false, false);

         expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
      });
   });
});
