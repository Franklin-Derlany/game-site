// var bemVindo = prompt("Olá, Queremos saber quem você é, por favor digite seu nome")
// console.log("O nome do usuário é: " + bemVindo)

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu-hamburger.png"

    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "x-menu.png"
    }
}


