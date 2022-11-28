let homeScore = document.querySelector("#home-points-text")
let guestScore = document.querySelector("#guest-points-text")

function plusOneHome(){
    let currentHomeScore = parseInt(homeScore.innerText)
    currentHomeScore += 1;
    homeScore.textContent = currentHomeScore;
}

function plusTwoHome(){
    let currentHomeScore = parseInt(homeScore.innerText)
    currentHomeScore += 2;
    homeScore.textContent = currentHomeScore;
}

function plusThreeHome(){
    let currentHomeScore = parseInt(homeScore.innerText)
    currentHomeScore += 3;
    homeScore.textContent = currentHomeScore;
}

function plusOneGuest(){
    let currentGuestScore = parseInt(guestScore.innerText)
    currentGuestScore += 1;
    guestScore.textContent = currentGuestScore;
}

function plusTwoGuest(){
    let currentGuestScore = parseInt(guestScore.innerText)
    currentGuestScore += 2;
    guestScore.textContent = currentGuestScore;
}

function plusThreeGuest(){
    let currentGuestScore = parseInt(guestScore.innerText)
    currentGuestScore += 3;
    guestScore.textContent = currentGuestScore;
}

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
   
}    
