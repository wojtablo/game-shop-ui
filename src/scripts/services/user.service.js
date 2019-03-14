
// Typically we retrieve user's data from DB.
// Create fake user object

let user = {
	name: 'John Doe',
	balance: 3500,
	equipment: [2,3], //IDs of items that user already have
};

const getUserData = () => {
	return user;
};

export default getUserData;
