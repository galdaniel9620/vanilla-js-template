import NavBar from '../ui/NavBar.js';
import Footer from '../components/Footer.js';
import NotFound from '../pages/notfound/NotFound.js';
import Home from '../pages/home/home.js';

const routes = {
    '/': Home,
  };
  
  function router() {
    const app = document.querySelector('#app');
    const nav = document.querySelector('#nav');
    const footer = document.querySelector('#footer');

    const page = routes[location.pathname] || NotFound;
    
    if (page === NotFound) {
      app.innerHTML = `
        ${page()}
      `;
    } else {
      nav.innerHTML = `${NavBar()}`
      app.innerHTML = `${page()}`;
      footer.innerHTML = `${Footer()}`;
    }
  
    // Add active class to current nav item
    document.querySelectorAll('nav a').forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  export default router;