const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	info: {
		title: 'Swagger', // Title of the documentation
		version: '1.0.0', // Version of the app
		description:
			' Swagger, Jest', // short description of the app
	},
	host: 'https://api-cocolux.csell.com.vn', // the host or url of the app
	basePath: '/v1', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
	// import swaggerDefinitions
	definition: swaggerDefinition,
	explorer: true,

	// path to the API docs
	apis: ['./*.service.js'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
