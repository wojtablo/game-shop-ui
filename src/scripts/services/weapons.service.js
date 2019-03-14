import RequestHandler from './request-handler.service.js';


// // --------------------------------
// //  Define Data Sources
// // --------------------------------
//
const getWeaponsList = () => {
	let url = 'http://localhost:3003/weapons';
	return RequestHandler(url);
};

export default getWeaponsList;
