import { Request, Response } from 'express';
import { ICityDTO } from '../../database/location.dto';
import createCityService from '../../services/city/createCity.service';

const createCity = async (req: Request, res: Response) => {
	try{
		const {name, abb, population}   = req.body
		const result = await createCityService({name, abb, population} as ICityDTO)

		result
            ? res.status(201).send(`Successfully created a new City with id ${result.id}`)
            : res.status(500).send("Failed to create a new City.");

	}catch(error){
		console.log( "failed to create City : "+ error )
	}
}

export default createCity