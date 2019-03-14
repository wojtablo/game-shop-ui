import getWeaponsList from '../../services/weapons.service.js';
import WeaponsListPartial from './weapons.template.js';

/**
 * Weapons Template Object
 *
 * @type {{afterRender: WeaponsComponent.afterRender, render: (function(): string)}}
 */
let WeaponsComponent = {

	/**
	 * Render component template with data
	 *
	 * @returns {Promise<string>}
	 */
	render: async () => {
		let _allWeapons = await getWeaponsList();
		console.log(_allWeapons);
		return WeaponsListPartial(_allWeapons);
	},

	/**
	 * Respond after component is displayed
	 *
	 * @returns {Promise<void>}
	 */
	afterRender: async () => {}

};

export default WeaponsComponent;
