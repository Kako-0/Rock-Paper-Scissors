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
/*
//show the container of result
async function showed() {
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
                const xesque = document.getElementById("contPick").remove('show');
                xesque.classList.classList.add('desappear');
                const dele = document.getElementById("game");
                dele.classList.add('show');
            }, 200);
        }
    });
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

function getPick() {
    const picked = document.getElementById("game");
    

    picked.addEventListener('click', (event) => {
        if (event.target.id != "game") {
            let pick = event.target.id;
            if (pick == 'imgPaper') {
                pick = 'paper';
            }
            if (pick == 'imgRock') {
                pick = 'rock';
            }
            if (pick == 'imgScissor') {
                pick = 'scissor';
            }
            alert(pick);
            //beats(pick);
        }
    });
    //console.log(pick);
    
    //picked.classList.add('desappear');
    
    //await showPick(pick);
}

async function showPick(idPick) {
    const container = document.getElementById("contPick");

    const picked = container.firstElementChild;
    picked.classList.add(`${idPick}`);

    container.classList.add('show');

    container.addEventListener('click', (event) => {
        if (event.target.id == 'playAgain'){
            showed();
        }
    });
}
*/

function getPick() {
    const picked = document.getElementById("game");
    
    picked.addEventListener('click', (event) => {
        if (event.target.id != "game" && event.target.id != "triangle") {
            let pick = event.target.id;

            if (pick == 'imgPaper') {
                pick = 'paper';
            }else{
                if (pick == 'imgRock') {
                    pick = 'rock';
                }else{
                    if (pick == 'imgScissor'){
                        pick = 'scissor';
                    }
                }
            }
            
            console.log(pick);
        }
    });
}