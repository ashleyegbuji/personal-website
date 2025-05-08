// Craps Main Data
let crapsUsername = ""

// Craps Game Settings
const startingMoney = 1000
const startingRounds = 0 
const bets = {
    even: "EVEN",
    odd: "ODD"
}
const minimumBet = 50

// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container"
const crapsBettingGridContainer = "craps-betting-grid-container"
const crapsRoundFinishGridContainer = "craps-round-finish-grid-container"
const crapsRoundFinishMessage = "craps-round-finish-message"
const crapsNextRoundButton = "craps-next-round-button"
const crapsNextRoundButtonDisabled = "craps-next-round-button-disabled"
//In-game variables
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minimumBet
let canChangeBet = true

function registerCrapsPlayer () {
    let crapsUsername = document.getElementById(crapsUsernameInput).value

    // Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
      alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number")    
    } else {
      removeRegistrationPane ()
      showMainGameSection ()
      setupFirstRound ()
    }

}
function showRegistrationPane () {
    document.getElementById(crapsRegistrationPane).style.display = "block"
}
function removeRegistrationPane () {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}
function showMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "block"
}
function hideMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "none"
}

function setupFirstRound () {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    document.getElementById(crapsNextRoundButtonDisabled).style.display = "none"
    document.getElementById(crapsNextRoundButton).style.display = "block"
    setMoney (startingMoney)
    setRounds (startingRounds)
    betEven()
    setBetAmount(minimumBet)
    setupNextRound()
}
function setupNextRound () {
    document.getElementById(crapsRollDiceAnimationContainer).style.display = "none"
    document.getElementById(crapsRoundFinishGridContainer).style.display = "none"
    document.getElementById(crapsRollDiceButton).style.display = "block"
    document.getElementById(crapsBettingGridContainer ).style.display = "block"
    canChangeBet = true
    setBetAmount(minimumBet)
}
function setMoney (money) {
    currentMoney = money
    document.getElementById(crapsStatsMoney).innerHTML = money
}
function setRounds (round) {
    currentRounds = round
    document.getElementById(crapsStatsRounds).innerHTML = round
}
function betEven () {
    chooseBet = bets.even
}
function betOdd () {
    chooseBet = bets.odd
}
function chooseBet (bet) {
    if (canChangeBet) {
        currentBet = bet 
        document.getElementById(crapsRegistrationPane).style.backgroundColor = "red"
        const deselectBet = bet == bets.even ? bets.odd : bets.even
        document.getElementById(deselectBet).style.backgroundColor = "transparent"
    }
}
function increaseBet () {
    // currentMoney
    currentBetAmount = Math.min(currentBet + minimumBet, currentMoney)
}
function decreaseBet () {
    currentBetAmount = Math.max(currentBet - minimumBet, minimumBet)
}
function setBetAmount (betAmount) {
    if (canChangeBet) {
        currentBetAmount = BetAmount
        document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
    }
}
function rollDice() {
    canChangeBet = false
    formatDiceScale()
    document.getElementById(crapsRollDiceAnimationContainer).style.display = "block"
    document.getElementById(crapsRollDiceButton).style.display = "none"
    const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: 2, callback: delayedProcessDiceResult, delay: 10000000 });
}
window.addEventListener("resize", formatDiceScale);
function formatDiceScale () {
    const vw = window.innerWidth * 0.8
    const vh = window.innerHeight * 0.8
    const widthScale = Math.min(700, vw, vh)
    const heightScale = widthScale * 0.714
    const scale = heightScale / 494.6592
    document.getElementById(crapsRollDiceAnimationContainer).style.transform = "scale(" + scale + ")"

}
function delayedProcessDiceResult (diceResult) {
    setTimeout(function() { ProcessDiceResult(diceResult) }, 1000)
}
function processDiceResult (diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0)
    let diceSumResult = bets.even
    if (sum % 2 === 1) {
        diceSumResult = bets.odd
    }
    setRounds (currentRounds + 1)
    let roundFinishMessage = ""

    if(diceSumResult === currentBet) {
        roundFinishMessage = "YOU WIN!"
        setMoney = (currentMoney + currentBetAmount)
    } else {
        roundFinishMessage = "YOU LOSE :("
        setMoney = (currentMoney - currentBetAmount)
    }
    if (currentMoney === 0) {
        roundFinishMessage = "YOU'RE OUT!"
        document.getElementById(crapsNextRoundButtonDisabled).style.display = "block"
        document.getElementById(crapsNextRoundButton).style.display = "none"
    }
 document.getElementById(crapsBettingGridContainer).style.display = "none"
 document.getElementById(crapsRoundFinishGridContainer).style.display = "block"
 document.getElementById(crapsRoundFinishMessage).innerHTML = roundFinishMessage
} 
function exitGame () {
    alert("After playing" + currentRounds + " rounds, you leave with " + currentMoney + "$")
    hideMainGameSection ()
    showRegistrationPane ()
    document.getElementById(crapsUsernameInput).value = ""
}