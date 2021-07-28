
/**
	 * @swagger
	 *
	 *  /user/Post:
	 *    post:
	 *      description: user get.
	 *      produces:
	 *        - application/json
	 *      consumes:
	 *        - application/json
	 *      parameters:
	 *        - in: body
	 *          name: params
	 *          schema:
	 *            type: object
	 *            required:
	 *              - phoneNumber
	 *              - password
	 *            properties:
	 *              phoneNumber:
	 *                type: string
	 *                example: 0328583474
	 *              password:
	 *                type: string
	 *                example: tien1234
	 *      responses:
	 *        200:
	 *          description: return token user
	 *        422:
	 *          description: Missing parameters
	 */
const User=function(){
	console.log("a");
}

export default User