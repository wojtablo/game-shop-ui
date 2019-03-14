import getUserData from '../../services/user.service.js';


class Player {

	constructor(){
		this.validateUser(getUserData());
	}

	validateUser(data) {
		console.log(`Hello ${data.name}! Your balance is ${data.balance}`);
	}

}

export default Player;
