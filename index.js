//show modal
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

//show the container of result
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


async function beats(id) {
    const result = document.getElementById("result");
    const house = document.getElementById("house");


    if (id == "rock" && house == "scissor") {
        result.innerText.replace("LOSE", 'WON');
    } else {
        if (id == "rock" && house == "rock") {
            house.innerText.replace("LOSE", 'TIED');
        }
    }

    if (id == "paper" && house == "rock") {
        result.innerText.replace("LOSE", 'WON');
    } else {
        if (id == "paper" && house == "paper") {
            house.innerText.replace("LOSE", 'TIED');
        }
    }

    if (id == "scissor" && house == "paper") {
        result.innerText.replace("LOSE", 'WON');
    } else {
        if (id == "scissor" && house == "scissor") {
            house.innerText.replace("LOSE", 'TIED');
        }
    }
}

async function getPick(obj) {
    const pick = obj.id;
    console.log(pick);
    beats(pick);

    const remove = document.getElementById("game");
    remove.classList.remove('show');
    remove.classList.add('desappear');
    
    await showPick(pick);

}

async function showPick(idPick) {
    const container = document.getElementById("contPick");

    //Color of the rock, paper or scissor chosen for player
    const picked = container.firstElementChild;
    //Respective image;
    const imgPicked = picked.lastElementChild;
    picked.classList.add(`${idPick}`);
    imgPicked.setAttribute('src', `./images/icon-${idPick}.svg`);

    container.classList.add('show');
    let pickHouse;
    let idHouse;

    setTimeout(() => {
        idHouse = choose();
        pickHouse = showPickHouse(idHouse);

    }, 1000);

    setTimeout(function(){ 
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

    //Color of the rock, paper or scissor chosen for player
    const picked = container.lastElementChild;
    //Respective image;
    const imgPicked = picked.lastElementChild;

    picked.classList.remove("darkmode");

    picked.classList.add(`${idPick}`);
    imgPicked.setAttribute('src', `./images/icon-${idPick}.svg`);

    return picked;
}

function choose() {
    options = ["rock", "paper", "scissors"];

    const chosen = Math.floor(Math.random() * (3 - 0)) + 0;

    return options[chosen];
}

  
  