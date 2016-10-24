function main() {
  $('.deck > ul > li').hide();
  var deckCount = countCardsInDeck();
  var activeCard = 1;

  function countCardsInDeck () {// # of list-items in .deck
    return document.querySelectorAll(".deck > ul > li").length;
  };

  function showActiveCard (cardNumber) {
    $( ".deck > ul > li:nth-child("+cardNumber+")" ).show();
  };

  function changeActiveCard () {
    $('.next').on('click', function() {
        $( ".deck > ul > li:nth-child("+activeCard+")" ).hide();
        activeCard++;
        checkForEndOfDeck();
        showActiveCard (activeCard);
        console.log("active card: "+activeCard)
    });
    $('.prev').on('click', function() {
        $( ".deck > ul > li:nth-child("+activeCard+")" ).hide();
        activeCard--;
        checkForEndOfDeck();
        showActiveCard (activeCard);
        console.log("active card: "+activeCard)
    });
  }

    function checkForEndOfDeck () {
      if (activeCard > deckCount) {
        activeCard = 1;
        console.log("User reached END. Card set to START.")
      } else if (activeCard < 1) {
        activeCard = deckCount;
        console.log("User reached START. Card set to END.")
      }
    };

showActiveCard (activeCard);
changeActiveCard ();

console.log("Number of cards in deck: "+deckCount);
console.log("active card: "+activeCard);

};

$(document).ready(main);
