
// Arrow Up function
const arrow=document.querySelector('.scroll_top')
// console.log(arrow)
arrow.addEventListener('click',arrowUp);

function arrowUp(){
//  Scroll smoothly to the top of the page
//  window.scrollTo(...) is a method provided by the window object 
//  Scroll the window to a specified position. 
 window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}

// Search the items 
const cardtitle=document.getElementById('search')
cardtitle.addEventListener('keyup',searchProducts)

function searchProducts(e) {
  var text = e.target.value.toLowerCase();
  var cards = document.querySelectorAll('.card'); // Select all card elements

  // Loop through each card
  cards.forEach(function (card) {
      var cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
      if (cardTitle.includes(text)) {
          card.style.display = 'flex'; // Show matching cards
      } else {
          card.style.display = 'none'; // Hide non-matching cards
      }
  });
}
