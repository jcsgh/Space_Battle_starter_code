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

        // create spaceship objects
        let USS = {

        hull: 20,
        firePower: 5,
        accuracy: 0.7,

        attack(spaceship) {

            if(Math.random() < this.accuracy) {
                // decreases alienSpaceship's hull number 
                alert("It hits the alien spaceship and causes major damage!")
                spaceship.hull = spaceship.hull - USS.firePower;
                enemyHull.nodeValue = `Hull : ${enemySpaceship.hull}`;
                if (spaceship.hull <= 0) {
                    flightOrFight()
                } else {
                    alert("But the alien spaceship attacks back!")
                    enemySpaceship.attack(USS)
                }
            } else {
                alert("It misses!")
                enemySpaceship.attack(USS)
            }
            

            
        }
        }

        let enemySpaceship = {


        hull: Math.floor(Math.random() * 4) + 3,  // picks a random number between 3 and 6
        firePower: Math.floor(Math.random() * 4) + 3,
        accuracy: (Math.floor(Math.random() * 3) + 6) / 10,

        attack(spaceship) {

            if (Math.random() < this.accuracy) {
                alert("The alien spaceship hits the USS Schwarzenegger!")
                spaceship.hull = spaceship.hull - enemySpaceship.firePower;
                playerHull.nodeValue = `Hull : ${USS.hull}`;
                if (spaceship.hull <= 0) {
                    gameOver()
                } else {
                    alert("But the USS Schwarzenegger survives and attacks again!")
                    USS.attack(enemySpaceship)
                }
            } else {
                alert("The alien ship misses!")
                alert("USS Schwarzenegger attacks again!")
                USS.attack(enemySpaceship)
            }

            
        }
        }

        let game = {
            checkWin() {

            }
        }

        // creates new alien spaceships
        class alienShip {
            constructor(hull, firePower, accuracy) {
                this.hull = Math.floor(Math.random() * 4) + 3; 
                this.hull = Math.floor(Math.random() * 4) + 3; 
                this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
            }
        }

        let alienShipsArr = []

        for (let i = 0; i <= 6; i++) {
            let newShip = new alienShip()
            alienShipsArr.push(newShip)
        }

        console.log(alienShipsArr)


        // put this in for loop
        if (Math.random() < alienShipsArr[0].accuracy) { 
            console.log('You have been hit!'); 
            // minus alien firepower from playerSHIp's hull
        } else {
            console.log('Missed!')
            // call to battle again
        }







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

        para = document.createElement("p")
        const enemyHull = document.createTextNode(`Hull : ${enemySpaceship.hull}`);
        para.appendChild(enemyHull)
        enemyStats.appendChild(enemyHull)


        br(enemyStats)


        para = document.createElement("p")
        const enemyFirePower = document.createTextNode(`Firepower : ${enemySpaceship.firePower}`);
        para.appendChild(enemyFirePower)
        enemyStats.appendChild(enemyFirePower)

        br(enemyStats)


        para = document.createElement("p")
        const enemyAccuracy = document.createTextNode(`Accuracy : ${enemySpaceship.accuracy}`);
        para.appendChild(enemyAccuracy)
        enemyStats.appendChild(enemyAccuracy)


    
    function playGame() {

        // hides play button
        hide()

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

        // attack enemy spaceship
        alert("The USS Schwarzenegger attacks first alien spaceship!")
        USS.attack(enemySpaceship)

    }

     // function to add break statement 
     function br(where) {
            let br = document.createElement("br");
            where.appendChild(br)
        }

        function flightOrFight() {
            let input = prompt("The alien ship went kabloo-ey. Would you like to retreat or fight the next enemy spaceship? Please type either 'fight' or 'retreat'.");
            let answer = input.toLowerCase();

            if (answer === "fight") {
                // bring out next alien ship

            } else if (answer === "retreat") {
                alert("The USS Schwarzenegger retreats. To be continued....");
                return;
                
            } else {
                alert("invalid answer. try again");
                flightOrFight()
            }
            
        }

        function gameOver() {
            prompt("Game over")
        }

        function hide() {
            document.getElementById("playBtn").style.display = "none";
            
        }

        playBtn.addEventListener("click", playGame)
        