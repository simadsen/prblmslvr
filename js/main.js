function main() {
  $('.deck > ul > li').hide(); // Hide all cards

  var deckCount = countCardsInDeck();
  var activeCardNumber = 1;

  function countCardsInDeck () {
    return document.querySelectorAll(".deck > ul > li").length;
  };

  function cardVisibility (cardNumber, visible) {
    if (visible === true) {
      $( ".deck > ul > li:nth-child("+cardNumber+")" ).show();
    } else if (visible === false) {
      $( ".deck > ul > li:nth-child("+cardNumber+")" ).hide();
    }
  };

  function changeActiveCard () {
    $('.next').on('click', function() {
        cardVisibility (activeCardNumber, false);
        activeCardNumber++;
        checkForEndOfDeck();
        cardVisibility (activeCardNumber, true);
        console.log("active card: "+activeCardNumber);
    });
    $('.prev').on('click', function() {
        cardVisibility (activeCardNumber, false);
        activeCardNumber--;
        checkForEndOfDeck();
        cardVisibility (activeCardNumber, true);
        console.log("active card: "+activeCardNumber);
    });
  };

    function checkForEndOfDeck () {
      if (activeCardNumber > deckCount) {
        activeCardNumber = 1;
        console.log("User reached END. Card set to START.")
      } else if (activeCardNumber < 1) {
        activeCardNumber = deckCount;
        console.log("User reached START. Card set to END.")
      }
    };

    function readMore () {
      $('.readmore').on('click', function() {
        console.log("Read More clicked");
        $( ".deck > ul > li > p" ).toggleClass('showOverflow');
        $( ".deck > ul > li > img" ).toggleClass('hideImage');
        $( ".deck > ul > li > img" ).slideToggle( 200, function(){
        });
      });
    };



cardVisibility (activeCardNumber, true);
changeActiveCard ();
readMore ();

console.log("Number of cards in deck: "+deckCount);
console.log("active card: "+activeCardNumber);

};

$(document).ready(main);
