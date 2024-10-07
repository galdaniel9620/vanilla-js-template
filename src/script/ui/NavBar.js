export default Navbar  

function Navbar () {
    const navLinks = [
            'Acasă',
            'Despre',
            'Contact'
        ]
    
    const linksHTML = navLinks.map(link => 
        `<a href="javascript:(void)}" data-link>${link}</a>`
    ).join('')  

    return `<nav>
          ${linksHTML}
    </nav>`
}