const order =require("./order.json");
const product=require("./product.json")
const user =require("./user.json")

const UserModel=require("../model/user.json")
const OrderModel=require("../model/order.json")

const path={
	...order,
	...product,
	...user
}
const model={
	 ...UserModel,
	 ...OrderModel
}
const index={
	info: {
	  title: "Swagger",
	  version: "1.0.0",
	  description: " Swagger, Jest"
	},
	host: "api-cocolux.csell.com.vn",
	basePath: "/v1",
	swagger: "2.0",
	tags: [
		
		{
		  name: "order",
		  description: "Access to order "
		}
		
	  ],
	  schemes: [
		"https",
		"http"
	  ],
	  
	  paths: path,
	  securityDefinitions: {
		"Bear": {
		  "type": "apiKey",
		  "name": "Authorization",
		  "in": "header"
		}
	  },
	  definitions: model,
	  externalDocs: {
		"description": "Find out more about Swagger",
		"url": "http://swagger.io"
	  }
	}

module.exports= index