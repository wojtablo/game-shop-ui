/**
 * Base function for creation GET requests
 *
 * @param url
 * @returns {Promise<any>}
 * @constructor
 */
const RequestHandler = async (url) => {

	const options = {
		method: 'GET',
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}

	catch (err) {
		console.log('Error getting documents', err);
	}

};

export default RequestHandler;
