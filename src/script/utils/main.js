import "../../style/style.scss"
import router from './router'

// Initial load
router();

// Handle navigation
window.addEventListener('popstate', router);

// Handle links
document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});