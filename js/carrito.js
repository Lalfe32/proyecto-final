const addCartButton = document.querySelectorAll('.add-cart');

addCartButton.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

function addToCartClicked (event){
    const button = event.target;
    const card = button.closest('.card');

    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.card-price').textContent;
    const cardImg = card.querySelector('.card-image').src;

    addCardToShoppingCart(cardTitle, cardPrice, cardImg)
}

function addCardToShoppingCart(cardTitle, cardPrice, cardImg) {
    console.log(cardTitle, cardPrice, cardImg)
}