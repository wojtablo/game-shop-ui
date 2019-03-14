import Header from './components/header.js';
import Footer from './components/footer.js';

import User from './components/user/user.component.js';
import WeaponsComponent from './components/shop/weapons.component.js';


const router = async () => {

	// Simulate user login
	new User();

	// Lazy load view element:
	// const header = null || document.getElementById('header');
	// const footer = null || document.getElementById('footer');
	const store = null || document.getElementById('products__placeholder');

	// Render the Header and footer of the page
	// header.innerHTML = await Header.render();
	// footer.innerHTML = await Footer.render();
	store.innerHTML = await WeaponsComponent.render();

	// await Header.after_render();
	// await Footer.after_render();
	await WeaponsComponent.afterRender();

};

// Listen on page load:
window.addEventListener('load', router);

