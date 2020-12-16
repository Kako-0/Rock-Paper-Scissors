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
    const algo = document.getElementById("contWinLose");
    algo.classList.add('show');

    algo.addEventListener('click', (event) => {
        if (event.target.id == 'playAgain'){
            algo.animate({
                opacity:[ 1, 0 ],
                offset: [ 0, 1 ]},
                200);
            setTimeout(function(){ 
                algo.classList.remove('show');
                const xesque = document.getElementById("contPick");
                xesque.classList.remove('show');
                xesque.classList.add('desappear');

                const dele = document.getElementById("game");
                dele.classList.remove('desappear'); 
                dele.classList.add('show');

            }, 200);
        }
    });
}


async function beats(id) {
    const result = document.getElementById("result");
    const house = document.getElementById("house");

    const housePick = house.lastElementChild;

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

    setTimeout(function(){ 
        const show = document.getElementById("contWinLose");
        show.classList.add("show");
    }, 2000);

    container.addEventListener('click', (event) => {
        if (event.target.id == 'playAgain'){
            reset();
        }
    });
}