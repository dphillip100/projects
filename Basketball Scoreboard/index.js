let homeScore = 0
let homeTeamScore = document.getElementById("home-team-score")
let guestScore = 0
let guestTeamScore = document.getElementById("guest-team-score")
let score = 0

function home1Point() {
    homeScore += 1
    updateHomeScore()
}

function home2Points() {
    homeScore += 2
    updateHomeScore()
}

function home3Points() {
    homeScore += 3
    updateHomeScore()
}

function guest1Point() {
    guestScore += 1
    updateGuestScore()
}

function guest2Points() {
    guestScore += 2
    updateGuestScore()
}

function guest3Points() {
    guestScore += 3
    updateGuestScore()
}
function updateHomeScore() {
    homeTeamScore.textContent = homeScore
}

function updateGuestScore() {
    guestTeamScore.textContent = guestScore
}

function newGame() {
    guestScore = 0
    homeScore = 0
    updateGuestScore()
    updateHomeScore()
}

updateHomeScore()
updateGuestScore()



// button clicked
// add one point to home team score
// update the score board to reflect updated home score
