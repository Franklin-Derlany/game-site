// var bemVindo = prompt("Olá, Queremos saber quem você é, por favor digite seu nome")
// console.log("O nome do usuário é: " + bemVindo)

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "hamburger-menu-icon-png-white-10.jpg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img_255345.png"
    }
}


