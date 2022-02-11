// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0

let game = document.querySelector('#game')
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)
//creating div with border for controls
let controls = document.createElement('div')
controls.setAttribute('class', 'controls')
game.append(controls)
//creating flip button
let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip the Penny!'
controls.append(flip)
//creating clear
let clear = document.createElement('button')
clear.setAttribute('id', 'clear')
clear.textContent = 'Clear Scoreboard'
controls.append(clear)

//create message
let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'Let\'s Get Rolling!'
game.append(message)


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    
    let total = 0
    // TODO: Add event listener and handler for flip and clear buttons
    flip.addEventListener('click', function() {
        let flipHeads = Math.random() < 0.5

        if(flipHeads) {
            penny.src = './assets/images/penny-heads.jpg'
            headFlips++
            message.textContent = 'You Flipped Heads!'

        } else {
            penny.src = './assets/images/penny-tails.jpg'
            tailFlips++
            message.textContent = 'You Flipped Tails!'
        }


        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips
        let tScore = document.querySelector('#tails')
        tScore.textContent = tailFlips

        total++
        
        let pHeads = `${Math.round(headFlips/total * 100)}%`
        let pTails = `${Math.round(tailFlips/total * 100)}%`

        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads
        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = pTails

    })

    clear.addEventListener('click', function(){

        headFlips = 0
        tailFlips = 0

        let hScore = document.querySelector('#heads')
        hScore.textContent = 0
        let tScore = document.querySelector('#tails')
        tScore.textContent = 0

        let hPercent = document.querySelector('#heads-percent')
        let tPercent = document.querySelector('#tails-percent')

        hPercent.textContent = 0
        tPercent.textContent = 0


    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})