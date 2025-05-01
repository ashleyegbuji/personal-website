// Craps Main Data
let crapsUsername = ""

// Craps Game Settings
const startingMoney = 1000
const startingRounds = 0 

// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-Rounds"

function registerCrapsPlayer () {
    let crapsUsername = document.getElementById(crapsUsernameInput).value

    // Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
      alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces")    
    } else {
      removeRegistrationPane ()
      showMainGameSection ()
      setupFirstRound ()
    }

}
function removeRegistrationPane () {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}
function showMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "block"
}
function setupFirstRound () {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    setMoney (startingMoney)
    setRounds (5)
}
function setMoney (money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
}
function setRounds (round) {
    document.getElementById(crapsStatsRounds).innerHTML = round
}
