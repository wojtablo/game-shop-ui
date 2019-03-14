/**
 * Display single list item
 *
 * @param item
 * @returns {string}
 * @constructor
 */
const WeaponItemPartial = (item) => `
	<li class="cl-list__item">
			<div class="ci ci-weapon">
					<div class="ci__header">
							<h3 class="ci__header__name" data-name="${item.name}">${item.name}</h3>
					</div>
					<div class="ci__figure">
						<!--<img class="ci__figure__image" src="${item.image}" alt="${item.name}" />-->
						<img class="ci__figure__image" src="/dist/s/gfx/item_weapon.png" alt="${item.name}" />
					</div>
					<div class="ci__footer">
								<span class="ci__footer__price" data-price="${item.price}">${item.price}$</span>
					</div>
			</div>
	</li>`;


/**
 * Display items with wrapper
 * @param itemsList
 * @returns {string}
 * @constructor
 */
const WeaponsListPartial = (itemsList) => `
	<ul class="cl-list">
			${itemsList.map(item => WeaponItemPartial(item)).join('')}
	</ul>`;

export default WeaponsListPartial;
