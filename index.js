function popup() {
    const box = document.getElementById("popupRules");

    box.classList.add('show');

    box.addEventListener('click', (event) => {
        if (event.target.id == 'popupRules' || event.target.id == 'closePopup'){
            box.classList.remove('show');
        }
    });
}