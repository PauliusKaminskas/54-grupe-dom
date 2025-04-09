export function header() {
    const menu = [
        { text: 'Home', href: '/' },
        { text: 'text', href: '/text' },
        { text: 'Food', href: '/food' },
        { text: 'Darzas', href: '/darzas' },
        { text: 'Header', href: '/header' },
    ];

    const currentPage =
        location.pathname.length > 1 && location.pathname.at(-1) === '/'
            ? location.pathname.slice(0, -1)
            : location.pathname;
    let linksHTML = '';

    for (const link of menu) {
        let activePage = '';
        if (link.href === currentPage) {
            activePage = 'active';
        }
        linksHTML += `<a class="link active" href="${link.href}">${link.text}</a>`;
    }
    /* const body = document.querySelector('body'); */
    /* const body = document.body; */
    const HTML = ` <header class="main-header">
            <img class="logo" src="../food/pizza.png" alt="logo" />
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;
    document.body.insertAdjacentHTML('afterbegin', HTML);
}
