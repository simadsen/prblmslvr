function main() {
  $('.deck > ul > li').hide();
  var currentDeck = "";
  var deckCount = countCardsInDeck();
  var activeCard = 0;

  function countCardsInDeck (){
    return document.querySelectorAll(".deck > ul > li").length;
  };

  function navigateCards () {

  };

  function showActiveCard (){

  };

  console.log("Number of cards: "+deckCount);
  console.log("Active card: "+activeCard);

}

$(document).ready(main);
