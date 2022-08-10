const ul = document.getElementsByTagName('ul');
const menuBtn = document.querySelector('.menu-btn i');
/* Show Menu */
function menuShow() {
    if (ul[0].classList.contains('open')) {
        ul[0].classList.remove('open');
    }else{
        ul[0].classList.add('open');
    }
}