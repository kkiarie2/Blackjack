

let cards = [] // array - ordered list of items
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerp =document.getElementById("player-El")
let player = {
    name: "kevin",
    chips: 500
}
playerp.textContent = player.name + " " + "$" + player.chips


// Make this function return a random number between 1 and 13
function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber > 10){
        return 10;
    }else if( randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
    
    
}


function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards= [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " 
    // render out ALL the cards we have
    for( let i= 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        console.log(cards);
    }

   
}