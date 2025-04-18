export function header() {
    let base = 'http://localhost:5408/';
    let projectName = '';
    if (location.hostname !== 'localhost') {
        projectName = '/54-grupe-dom';
        base = 'https://pauliuskaminskas.github.io/54-grupe-dom/';
    }
    document.head.insertAdjacentHTML('afterbegin', `<base href="${base}">`);
    /*     if (location.hostname !== 'localhost') {
        base = 'https://pauliuskaminskas.github.io/54-grupe-dom/';
    }
    document.head.insertAdjacentHTML(
        'afterbegin',
        '<base href="http://localhost:5408">'
    ); */

    const menu = [
        { text: 'Home', href: '/' },
        { text: 'Text', href: '/text/' },
        { text: 'Food', href: '/food/' },
        { text: 'Darzas', href: '/darzas/' },
        { text: 'Header', href: '/header/' },
        { text: 'Click', href: '/click/' },
        { text: 'Like', href: '/like/' },
    ];

    /* const currentPage =
        location.pathname.length > 1 && location.pathname.at(-1) === '/'
            ? location.pathname.slice(0, -1)
            : location.pathname; */
    let linksHTML = '';

    for (const link of menu) {
        let activePage = '';
        if (projectName + link.href === location.pathname) {
            activePage = 'active';
        }
        linksHTML += `<a class="link ${activePage}" href=".${link.href}">${link.text}</a>`;
    }
    /* const body = document.querySelector('body'); */
    /* const body = document.body; */
    const HTML = ` <header class="main-header">
            <img class="logo" src="./img/logo.png" alt="logo" />
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;
    document.body.insertAdjacentHTML('afterbegin', HTML);
}
