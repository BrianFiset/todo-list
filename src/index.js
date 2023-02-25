import * as opentab from "./modules/inbox";


function cleanMain() {
    const main = document.getElementsByClassName('main')[0];
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
}


(function (){
    const inbox = document.getElementsByClassName('inbox')[0];
    const today = document.getElementsByClassName('today')[0];
    const upcoming = document.getElementsByClassName('upcoming')[0];

    inbox.addEventListener('click', () => {
        cleanMain();
        opentab.openInbox();
    })

    today.addEventListener('click', () => {
        cleanMain();
        opentab.openToday();
    })


    upcoming.addEventListener('click', () => {
        cleanMain();
        opentab.openUpcoming();
    })
    
})();

