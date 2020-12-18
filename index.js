//it shows the modal
function popup() {
    const box = document.getElementById("popupRules");

    box.classList.add('show');

    box.addEventListener('click', (event) => {
        if (event.target.id == 'popupRules' || event.target.id == 'closePopup'){
            box.animate({
                opacity:[ 1, 0 ],
                offset: [ 0, 1 ]},
                200);
            setTimeout(function(){ 
                box.classList.remove('show');
            }, 200);
        }
    });
}

//it resets for the beginning
async function reset() {
    const reset = document.getElementById("contPick");
    const desappearWinlose = document.getElementById("contWinLose");
    const desappearHouse = reset.lastElementChild.
        classList.add("darkmode");
    const desappearImgHouse = reset.lastElementChild.
        lastElementChild.setAttribute('src', `./images/icon-.svg`);

    desappearWinlose.classList.remove("show");

    reset.classList.remove('show');
    reset.classList.add('desappear');
    reset.animate({
        opacity:[ 1, 0 ],
        offset: [ 0, 1 ]},
        200
    );

    const initialScreen = document.getElementById("game");
    initialScreen.classList.remove("desappear");
    initialScreen.classList.add("show");
}

// The logic of the game
function beats(id, house) {
    const result = document.getElementById("result");
    const score = document.getElementById("point");
    const btn = document.getElementById("playAgain");
    let scoreInt = parseInt(score.innerHTML);

    result.innerHTML = "YOU TIED";
    btn.style.color = "hsl(217, 16%, 45%)";
    
    if ((id == 'paper' && house == 'rock') || (id == 'rock' && house == 'scissors') || (id == 'scissors' && house == 'paper')) {
        result.innerHTML = "YOU WON";
        btn.style.color = "hsl(217, 16%, 45%)";
        if (scoreInt >= 0) {
            scoreInt += 1;
            setTimeout(() => {
                score.innerHTML = `${scoreInt}`; 
            }, 1500);
        }
        
    }else{
        if ((id == 'paper' && house == 'scissors') || (id == 'rock' && house == 'paper') || (id == 'scissors' && house == 'rock')) {
            result.innerHTML = "YOU LOSE";
            btn.style.color = "hsl(349, 71%, 52%)";
            if (scoreInt > 0) {
                scoreInt -= 1;
                setTimeout(() => {
                    score.innerHTML = `${scoreInt}`; 
                }, 1500);
            }
        }
    }
}

//It takes the choice of the player and the house
async function getPick(obj) {
    const pick = obj.id;
    const idHouse = choose();
    console.log(`idPick: ${pick}`);
    console.log(`idHouse: ${idHouse}`);

    beats(pick, idHouse);
    
    //It removes the div of step-1
    const remove = document.getElementById("game");
    remove.classList.remove('show');
    remove.classList.add('desappear');
    
    await showPick(pick, idHouse);

}

//it shows the div of the step-2, step-3 and step-4
async function showPick(idPick, idHouse) {
    const container = document.getElementById("contPick");
    const picked = container.firstElementChild;
    
    const imgPicked = picked.lastElementChild;
    //Color of the rock, paper or scissor chosen for player
    picked.classList.add(`${idPick}`);
    //Respective image;
    imgPicked.setAttribute('src', `./images/icon-${idPick}.svg`);
    //it shows the step-2
    container.classList.add('show');
    let pickHouse;

    //it shows the step-3
    setTimeout(() => {
        pickHouse = showPickHouse(idHouse);
    }, 1000);

    //it shows the step-4
    setTimeout(() => { 
        const show = document.getElementById("contWinLose");
        show.classList.add("show");
    }, 2000);

    container.addEventListener('click', (event) => {
        if (event.target.id == 'playAgain'){
            picked.classList.remove(`${idPick}`);
            pickHouse.classList.remove(`${idHouse}`);
            reset();
        }
    });
}

function showPickHouse(idPick) {
    const container = document.getElementById("contPick");
    const picked = container.lastElementChild;
    const imgPicked = picked.lastElementChild;

    //its removes class "darkmode"
    picked.classList.remove("darkmode");
    //Color of the rock, paper or scissor chosen for the house
    picked.classList.add(`${idPick}`);
    //Respective image;
    imgPicked.setAttribute('src', `./images/icon-${idPick}.svg`);

    return picked;
}

//the logic of the the house for to choice 
function choose() {
    const options = ["rock", "paper", "scissors"];

    const chosen = Math.floor(Math.random() * (3 - 0)) + 0;

    return options[chosen];
}

  
  