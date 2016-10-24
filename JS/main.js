function main() {
  $('.deck > ul > li').hide();
  var deckCount = countCardsInDeck();
  var activeCardNumber = 1;

  function cardVisibility (cardNumber, visibility) {
    if (visibility === 'show') {
      $( ".deck > ul > li:nth-child("+cardNumber+")" ).show();
    } else if (visibility === 'hide') {
      $( ".deck > ul > li:nth-child("+cardNumber+")" ).hide();
    }
  }

  function countCardsInDeck () {// # of list-items in .deck
    return document.querySelectorAll(".deck > ul > li").length;
  };

  function changeActiveCard () {
    $('.next').on('click', function() {
        cardVisibility (activeCardNumber, 'hide');
        activeCardNumber++;
        checkForEndOfDeck();
        cardVisibility (activeCardNumber, 'show');
        console.log("active card: "+activeCardNumber);
    });
    $('.prev').on('click', function() {
        cardVisibility (activeCardNumber, 'hide');
        activeCardNumber--;
        checkForEndOfDeck();
        cardVisibility (activeCardNumber, 'show');
        console.log("active card: "+activeCardNumber);
    });
  }

    function checkForEndOfDeck () {
      if (activeCardNumber > deckCount) {
        activeCardNumber = 1;
        console.log("User reached END. Card set to START.")
      } else if (activeCardNumber < 1) {
        activeCardNumber = deckCount;
        console.log("User reached START. Card set to END.")
      }
    };

cardVisibility (activeCardNumber, 'show');
changeActiveCard ();

console.log("Number of cards in deck: "+deckCount);
console.log("active card: "+activeCardNumber);

};

$(document).ready(main);
