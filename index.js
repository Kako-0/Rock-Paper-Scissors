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

function showed() {
    const algo = document.getElementById("contWinLose");
    algo.style.display = "flex";

    algo.addEventListener('click', (event) => {
        if (event.target.id == 'playAgain'){
            algo.animate({
                opacity:[ 1, 0 ],
                offset: [ 0, 1 ]},
                200);
            setTimeout(function(){ 
                algo.style.display = "none";
                const xesque = document.getElementById("contPick").style.display = "none";
                const dele = document.getElementById("game").style.display = "flex";
            }, 200);
        }
    });
}