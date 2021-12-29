/* Build a game of battling alien spaceships using Javascript. Earth has been attacked by a horde of aliens! 
       You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens
       as you try to destroy them with your lasers. There are six alien ships. The aliens' weakness is that they are
       too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another
       alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have
       targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the 
       option to make a hasty retreat. */

/* You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again 
- If it survives, it attacks you again - Etc. - If you destroy the ship, you have the option to **attack** 
`   the next ship or to **retreat** - If you retreat, the game is over, perhaps leaving the game open for further 
developments or options. - You win the game if you destroy all of the aliens. - You lose the game if you are destroyed. 
*/





// sketch out game with pseduo code 
// when player clicks play button 
// have playerShip attack alienShip 
// if alien ship is still alive
// attacl player ship
// battle until a ship's hull is at 0
// prompt user if they want tobattle next alien ship or retreat
// if the player chooses to battle next alien ship
// bring out next alien ship and do it again
// else , display a story will be continues message and end the game
// if the player's ship hull is 0
// game ends andp layer loses
// if the player defeats all the alien ships
// the player wins and game ends

// whenever attacks are made to the hull, the value needs to change in the DOM


// variables to connect HTML elements to Javascript
let playerStats = document.getElementById("playerStats")
let enemyStats = document.getElementById("enemyStats")
let playBtn = document.getElementById("playBtn")
let i = 0;
let alienShipsArr = []
let enemyHull;
let enemyFirepower;
let enemyAccuracy;
let played = false;

// creates class of alien spaceships
class alienShip {
    constructor(hull, firePower, accuracy) {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firePower = Math.floor(Math.random() * 4) + 3;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }

    // method to attack other spaceship
    attack(spaceship) {

        if (Math.random() < alienShipsArr[i].accuracy) {
            alert("You hear a loud PING and you feel the spaceship rattle. The lights flicker. You've been hit!")
            spaceship.hull = spaceship.hull - alienShipsArr[i].firePower;
            playerHull.nodeValue = `Hull : ${USS.hull}`;
            if (spaceship.hull <= 0) {
                playerHull.nodeValue = `Hull : 0`;
                setTimeout(function () {
                    gameOver()
                }, 300)

            } else {
                alert("But the ship is still in-tack, and you fire back!")
                USS.attack(alienShipsArr[i])
            }
        } else {
            alert("The alien ship fires a laser in your direciton, but it just misses!")
            USS.attack(alienShipsArr[i])
        }


    }


}


// create spaceship objects
let USS = {

    hull: 20,
    firePower: 5,
    accuracy: 0.7,

    attack(spaceship) {
        alert("You aim your lasers at the alien spaceship and FIRE!")
        if (Math.random() < this.accuracy) {
            // decreases alienSpaceship's hull number 
            alert("PING! You see hit your target and see damage to the alien spaceship.")
            spaceship.hull = spaceship.hull - this.firePower;
            enemyHull.nodeValue = `Hull : ${alienShipsArr[i].hull}`;
            if (spaceship.hull <= 0) {
                enemyHull.nodeValue = `Hull : 0`;
                setTimeout(function () {
                    flightOrFight()
                }, 500)

            } else {
                alert("The alien spaceship fires back!")
                alienShipsArr[i].attack(USS)
            }
        } else {
            alert("You fire but the laser just misses the target!")
            alienShipsArr[i].attack(USS)
        }


    }
}



for (let i = 0; i <= 6; i++) {
    let newShip = new alienShip()
    alienShipsArr.push(newShip)
}

alienStats(alienShipsArr[i])





// add hull, firepower, and accuracy stats to player stats

let para = document.createElement("p")

const playerHull = document.createTextNode(`Hull : ${USS.hull}`);
para.appendChild(playerHull)
playerStats.appendChild(playerHull)

br(playerStats)

para = document.createElement("p")

const playerFP = document.createTextNode(`Fire power : ${USS.firePower}`);
para.appendChild(playerFP)
playerStats.appendChild(playerFP)

br(playerStats)

para = document.createElement("p")

const playerAccuracy = document.createTextNode(`Accuracy : ${USS.accuracy}`);
para.appendChild(playerAccuracy)
playerStats.appendChild(playerAccuracy)

br(playerStats)



// add hull, firepower, and accuracy stats to enemy stats
function alienStats(name) {

    let para = document.createElement("p")
    enemyHull = document.createTextNode(`Hull : ${name.hull}`);
    para.appendChild(enemyHull)
    enemyStats.appendChild(enemyHull)

    br(enemyStats)

    para = document.createElement("p")
    enemyFirePower = document.createTextNode(`Firepower : ${name.firePower}`);
    para.appendChild(enemyFirePower)
    enemyStats.appendChild(enemyFirePower)

    br(enemyStats)

    para = document.createElement("p")
    enemyAccuracy = document.createTextNode(`Accuracy : ${name.accuracy}`);
    para.appendChild(enemyAccuracy)
    enemyStats.appendChild(enemyAccuracy)


}


function playGame() {

    if (played === false) {
        alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. After you have destroyed a ship, you have the option to make a hasty retreat.")
    }

    // hides play button
    hide()

    setTimeout(function () {
        
        USS.attack(alienShipsArr[i])
    }, 100);

}

// function to add break statement 
function br(where) {
    let br = document.createElement("br");
    where.appendChild(br)
}

function flightOrFight() {

    i++;
    if (i >= alienShipsArr.length) {
        alert("You defeated all the alien ships!")
        playAgain()
    }
    let input = prompt(`BOOM! The alien ship explodes as you watch the remaining bits float away into space. The USS Schwarzenegger's hull is at ${USS.hull}. You consider whether you should continue fighting the incoming aliens or retreat. Please type either 'fight' or 'retreat'.`);
    let answer = input.toLowerCase();

    if (answer === "fight") {

         
             // change enemy stats in the dom
        enemyHull.nodeValue = `Hull : ${alienShipsArr[i].hull}`;
        enemyFirePower.nodeValue = `Firepower : ${alienShipsArr[i].firePower}`;
        enemyAccuracy.nodeValue = `Accuracy : ${alienShipsArr[i].accuracy}`;
        alert("You see another alien spaceship approaching quickly.")
        setTimeout(function () {
            USS.attack(alienShipsArr[i]);
        }, 500)

        

       

    } else if (answer === "retreat") {
        alert("You wisely retreat the USS Schwarzenegger away from the incoming alien ships and plan to return at a later time...");
        return;

    } else {
        alert("Invalid answer. Please try again!");
        flightOrFight()
    }

}

function gameOver() {
    alert("You hear a loud BOOM and then a bright light floods your senses and then. Blackness. You wake up with ringing in your ears. As you look around, your eyes blurred, you realize you are not in your spaceship anymore. The aliens have destroyed the USS Schwarzenegger and you are now their hostage. Game over.")
    playAgain()
}

function playAgain() {
    let pr = prompt(`Would you like to play again? Please type either "yes" or "no".`)
    let answer = pr.toLowerCase();

    if (answer === "yes") {

        i = 0;
        played = true;

        // for (let i = 0; i <= 6; i++) {
        //     let newShip = new alienShip()
        //     alienShipsArr.push(newShip)
        // }

        // alienShipsArr[i].hull = 5;
        // alienShipsArr[i].firePower = 6;
        // alienShipsArr[i].accuracy = 0.5;


        // enemyHull.nodeValue = `Hull : ${alienShipsArr[i].hull}`;
        // enemyFirePower.nodeValue = `Firepower : ${alienShipsArr[i].firePower}`;
        // enemyAccuracy.nodeValue = `Accuracy : ${alienShipsArr[i].accuracy}`;

        // USS.hull = 20;
        // console.log(USS.hull)
        // playerHull.nodeValue = `Hull : ${USS.hull}`;

        alert("We have miracously revived your spaceship. Let's battle more aliens!")

        // setTimeout(function() {
        //     playGame()
        // }, 300)

    } else if (answer === "no") {
        alert("We will hopefully see you soon.");
        return;
    } else {
        alert("Invalid answer. Please try again!");
        playAgain()
    }
}

function hide() {
    document.getElementById("playBtn").style.display = "none";

}


playBtn.addEventListener("click", playGame)
