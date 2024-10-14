export default NavBar  

function NavBar () {
    const navLinks = [
            'Acasă',
            'Despre',
            'Contact'
        ]
    
    const linksHTML = navLinks.map(link => 
        `<li><a href="javascript:(void)}" data-link>${link}</a></li>`
    ).join('')  

    return `
        <div class="inner">
            <ul>
                ${linksHTML}
            </ul>
        </div>`
}