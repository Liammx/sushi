// // const count = document.querySelector('[data-counter')
// window.addEventListener("click", (event) => {
//     console.log('click');
//   if (event.target.dataset.action === "plus") {
//     const counterWrapper = event.target.closest(".counter-wrapper");
//     const counter = counterWrapper.querySelector("[data-counter]");
//     counter.innerHTML = ++counter.innerHTML;
//     console.log(counter);
//   }


  
//   if (event.target.dataset.action === "minus") {
//     const counterWrapper = event.target.closest(".counter-wrapper");
//     const counter = counterWrapper.querySelector("[data-counter]");

//     if (parseInt(counter.innerHTML) > 1) {
//       counter.innerHTML = --counter.innerHTML;
//     } else {
//       counter.innerHTML = "1";
//     }
//   }
// });
// const itemCart = cardWrapper.querySelector(`'data-id-"${cardItem.id}"`)
// console.log(itemCart);
// if (itemCart) {
//   let counterElem = itemCart.querySelector('[data-counter')
//   counterElem.innerTEXT = parseInt(counterElem.innerText) + parseInt(carItem)
//  } else {
//   let itemHtml = `
//   `
//  }

//  if(parseInt(counter.innerHTML) >1){
//   counter.innerHTML = --counter.innerHTML
//  } else if (event.target.closest('.cart-wrapper') && 
//  parseInt(counter.innerHTML) == 1){
//   event.target.closest('.cart-item').remove()
//  }

//  function totalCalc() {
//   const cartItem = document.querySelector('.cart-item')
//   const totalPrice =  document.querySelector('.total-price')

//   let total = 0
//   cartItem.forEach(item => {
//     let count = item.querySelector('[data-counter').innerText
//     let price = item.querySelector('.price__currency').innerText
//     let totalP = parseInt(count) * parseInt(price)
//     total += totalP
//   })
//   totalPrice.innerHTML = total
//  }

function calcTotalPrice() {

  const cartItems = document.querySelectorAll('.cart-item')
  const totalPrice = document.querySelector('.total-price')

  console.log(cartItems);

  let total = 0;

  cartItems.forEach((item) => {
      const itemCount = item.querySelector('[data-counter]').innerHTML
      const itemPrice = item.querySelector('.price__currency').innerHTML

      const priceTotal = parseInt(itemCount) * parseInt(itemPrice)

      total = total + priceTotal

      console.log(priceTotal);
  })
  totalPrice.innerHTML = total

  console.log(total);

}



function toggleComplite() {

  const cartWrapper = document.querySelector('.cart-wrapper')
  const dataCart = document.querySelector('[data-cart-empty]')

  const orderForm = document.querySelector('#order-form')



  if (cartWrapper.children.length > 0) {
      console.log('full');
      dataCart.classList.add('none')
      orderForm.classList.remove('none')

  } else {
      console.log('empty');
      dataCart.classList.remove('none')
      orderForm.classList.add('none')
  }

  
}



window.addEventListener('click', function (event) {

  if (event.target.dataset.action === "plus") {

      const counterWrapper = event.target.closest('.counter-wrapper')


      const counter = counterWrapper.querySelector('[data-counter]')
      counter.innerText = ++counter.innerText
      calcTotalPrice()
  }

  if (event.target.dataset.action === "minus") {

      const counterWrapper = event.target.closest('.counter-wrapper')

      const counter = counterWrapper.querySelector('[data-counter]')
      if (parseInt(counter.innerText) > 1) {
          counter.innerText = --counter.innerText
      }
      else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

          event.target.closest('.cart-item').remove()
          toggleComplite()
      }

      calcTotalPrice()
  }
})


const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (event) {

  if (event.target.hasAttribute('data-cart')) {

      const card = event.target.closest('.card')

      const productInfo = {
          id: card.dataset.id,
          imgSrc: card.querySelector('.product-img').getAttribute('src'),
          title: card.querySelector('.item-title').innerText,
          itemInBox: card.querySelector('[data-items-in-box]').innerText,
          weight: card.querySelector('.price__weight').innerText,
          price: card.querySelector('.price__currency').innerText,
          counter: card.querySelector('[data-counter]').innerText,
      }



      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

      if (itemInCart) {
          const counterElem = itemInCart.querySelector("[data-counter]")
          counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter)
      } else {

          const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
          <div class="cart-item__top">
          <div class="cart-item__img">
          <img src="${productInfo.imgSrc}" alt="img" />
          </div>
          <div class="cart-item__desc">
          <div class="cart-item__title">${productInfo.title}</div>
          <div class="cart-item__weight">${productInfo.itemInBox}/ ${productInfo.weight}</div>
          
          <!-- cart-item__details -->
          <div class="cart-item__details">
          <div class="items items--small counter-wrapper">
          <div class="items__control" data-action="minus">
          -
          </div>
          <div class="items__current" data-counter="">${productInfo.counter}</div>
          <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
              <div class="price__currency">${productInfo.price}</div>
            </div>
          </div>
          <!-- // cart-item__details -->
        </div>
        </div>
        </div>`


          cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML)
      }



      card.querySelector('[data-counter]').innerText = "1"
      toggleComplite()
      calcTotalPrice()

  }
})

const delivery = document.querySelector('.delivery-cost') 




