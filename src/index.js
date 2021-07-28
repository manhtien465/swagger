/**
	 * @swagger
	 *
	 *  /planet/Defend:
	 *    post:
	 *      description: Attacks to the planet with given weapon.
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
	 *              - weaponName
	 *              - planetName
	 *            properties:
	 *              weaponName:
	 *                type: string
	 *                example: Death Star
	 *              planetName:
	 *                type: string
	 *                example: Alderaan
	 *      responses:
	 *        200:
	 *          description: Example attack result
	 *        422:
	 *          description: Missing parameters
	 */