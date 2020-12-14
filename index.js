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
