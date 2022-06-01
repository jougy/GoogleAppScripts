//RandomGenerator

 function getRandomIntInclusive(numMin,numMax) {
      var min = Math.ceil(numMin);
      var max = Math.floor(numMax);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }

  function quickSort(listaDesordenada){
      if(listaDesordenada == 0)return [];
      if(listaDesordenada == 1)return listaDesordenada;

      var pivot = listaDesordenada[0]
      var head = listaDesordenada.filter(n => n < pivot);
      var equal = listaDesordenada.filter(n => n == pivot);
      var tail = listaDesordenada.filter(n => n > pivot);

      return quickSort(head).concat(equal).concat(quickSort(tail));
    } 

  class GeradorRandom{
    constructor(qtd, numMin, numMax, length){
      this.qtd = qtd
      this.numMin = numMin
      this.numMax = numMax
      this.length = length
    } 

    gerarListaIntRandom (){
      var i = 0
      var listaRandom = []
      while(i<this.qtd){
      listaRandom[i] = getRandomIntInclusive(this.numMin, this.numMax)
      i=i+1
      }
      return listaRandom
    }

    gerarListaStrRandom(){
      var i = 0
      var listaRandom = []
      while(i<this.qtd){
      listaRandom[i] = makeid(this.length)
      i=i+1
      }
      return listaRandom
    }

      gerarDicionarioRandom(){
      var i = 0
      var listaIntRandom = []
      var listaStrRandom = []
      var dicRandom = {}
      while(i<this.qtd){
        listaIntRandom[i] = getRandomIntInclusive(this.numMin, this.numMax)
        listaStrRandom[i] = makeid(this.length)
        var key = listaIntRandom[i]
        var inf = listaStrRandom[i]
        dicRandom[i] = {key,inf}
        i=i+1
      }
      return dicRandom
    }
  }

let numRand = new GeradorRandom(20, 1, 10000, 8)
function main(){
  Logger.log(numRand.gerarDicionarioRandom())

}
