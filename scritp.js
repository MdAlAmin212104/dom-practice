// const totalElement = document.getElementById('total-price').innerText;
// const totalPrice = parseFloat(totalElement);

// function shop(){
//       const price = document.getElementById('product-price').innerText;
//       const productPrice = parseFloat(price);
//       const updatePrice = totalPrice + productPrice;
      
      
      
// }
let titleCount = 1;
let totalPrice = 0;
const card = document.querySelectorAll('.card');


for( const cards of card){
      cards.addEventListener('click', function(){
            const title = cards.querySelector('p').innerText;
            const price = parseFloat(cards.querySelector('h5').innerText.split(' ')[0]);
            
            
            // set title 

            const titleContainer = document.getElementById('title-container');

            const p = document.createElement('p');
            p.innerText = titleCount + '. ' + title;
            titleContainer.appendChild(p);
            titleCount++;

            //calculate price
            totalPrice += price;
            console.log(totalPrice);

            //set totalPrice 
            document.getElementById('total-price').innerText = totalPrice.toFixed(2);
            
            

      })
}
