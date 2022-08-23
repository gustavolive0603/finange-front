const ul = document.getElementsByTagName('ul');
const menuBtn = document.querySelector('.menu-btn i');

/* Mostra os links no menu, na mobile-page */
function menuShow() {
    if (ul[0].classList.contains('open')) {
        ul[0].classList.remove('open');
    }else{
        ul[0].classList.add('open');
    }
}

/* Função que renderiza a navBar */
const createHeader = () => {
    const paths = [
        {
            title: 'Inicio',
            path: '/pages/'
        },
        {
            title: 'Dashboard',
            path: '/pages/board.html'
        }
    ];

    const nav = document.createElement('nav');
    const title = document.createElement('a')
    const logo_box  = document.createElement('div');
    const menu_btn = document.createElement('div');
    const login_btn = document.createElement('div');
    const img = document.createElement('img');
    const icon = document.createElement('i');
    const ul = document.createElement('ul');
    const login_box = document.createElement('li');
    const link = document.createElement('a');
    const span = document.createElement('span');

        //Cria a div da logo
        logo_box.classList.add('ajustaLogo');
            img.src = '../assets/img/logo.png';
            img.alt = 'Finange';
            img.classList.add('logoImg');

            title.href = paths.map(item => ( item.title == 'Inicio' ? item.path : ''))[0];
            title.classList.add('logo');
            title.appendChild(document.createTextNode('Finange'));
        logo_box.appendChild(img);
        logo_box.appendChild(title);
           
        //Cria o menu-icon do mobile
        menu_btn.classList.add('menu-btn');
            icon.classList = 'fa fa-bars fa-2x';
            icon.onclick = 'menuShow()'
        menu_btn.append(icon); 

        //Lista e adiciona os links na ul
        ul.classList.add('nav-list');
            paths.map(value => {
                let li = document.createElement('li')
                let link = document.createElement('a')
                link.appendChild(document.createTextNode(value.title));
                link.href = value.path;

                if (window.location.pathname == value.path) {
                    link.classList.add('active')
                }
                li.appendChild(link);

                ul.appendChild(li);
            })
                login_btn.classList.add('login-btn');
                    link.href = '/pages/login.html';
                        span.append(document.createTextNode('Login'));
                    link.append(span);
                login_btn.append(link);
            login_box.append(login_btn);
        ul.append(login_box);
            
    nav.append(logo_box);//Adiciona div da logo na navBar
    nav.append(menu_btn);//Adiciona menu-icon na navBar
    nav.append(ul);//Adiciona os links na navBar

    //Adiciona a navbar na pagina
    document.querySelector('header').append(nav);
}

//Quando a pagina estiver carregada a nav irá aparecer
document.addEventListener("DOMContentLoaded", () => {
    createHeader()
});