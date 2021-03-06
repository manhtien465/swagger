const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const bodyParser = require('body-parser');

const index = require('../src/services/index.js');
const user = require('../src/services/user.json');
const order = require('../src/services/order.json');
const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const PORT = 3001;

const options = {
	explorer: true,
	enableCORS: true
};

app.use('/', swaggerUi.serve, swaggerUi.setup(index, options));
// app.use('/user',swaggerUi.serve, swaggerUi.setup(user, options))
// app.use('/order',swaggerUi.serve, swaggerUi.setup(order, options))
app.listen(PORT, () =>
	console.log(`swagger ui listening on port ${PORT}!`),
);