describe("MaiorEMenor", function(){

   it("deve entender numeros em ordem nao sequencial", function(){
      var algoritimo = new MaiorEMenor();
      algoritimo.encontra([5,15,7,9]);

      expect(algoritimo.pegaMaior()).toEqual(15);
      expect(algoritimo.pegaMenor()).toEqual(5);
   });

   it("deve entender numeros em ordem crescente", function(){
      var algoritimo = new MaiorEMenor();
      algoritimo.encontra([5,6,7,8,9]);

      expect(algoritimo.pegaMaior()).toEqual(9);
      expect(algoritimo.pegaMenor()).toEqual(5);
   });

   it("deve entender numeros em ordem descrecente", function(){
      var algoritimo = new MaiorEMenor();
      algoritimo.encontra([9,8,7,6,5]);

      expect(algoritimo.pegaMaior()).toEqual(9);
      expect(algoritimo.pegaMenor()).toEqual(5);
   });

   it("deve entender numeros em ordem descrecente", function(){
      var algoritimo = new MaiorEMenor();
      algoritimo.encontra([5]);

      expect(algoritimo.pegaMaior()).toEqual(5);
      expect(algoritimo.pegaMenor()).toEqual(5);
   });
});
