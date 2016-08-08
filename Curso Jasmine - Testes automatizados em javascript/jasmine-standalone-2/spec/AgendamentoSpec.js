describe("Agendamento", function(){

   var _mau;
   var _agenda;

   beforeEach(function(){
      _mau = new PacienteBuilder().constroi();
      _agenda = new Agendamento();
   });

   it("deve agendar para 20 dias depois", function(){

      var consulta = new Consulta(_mau, [], false, false, new Date(2014,7,1))
      var novaConsulta = _agenda.para(consulta);

      expect(novaConsulta.getData().toString()).toEqual(new Date(2014,7,21).toString());
   });

   it("deve pular fins de semana", function(){
      var consulta = new Consulta(_mau, [], false, false, new Date(2014,5,30))
      var novaConsulta = _agenda.para(consulta);

      expect(novaConsulta.getData().toString()).toEqual(new Date(2014,6,21).toString());
   })
});
