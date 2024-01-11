import { Request, Response } from 'express';
import getManyCountriesService from '../../services/country/getManyCountries.service';

const getManyCountry = async (req: Request, res: Response) => {
	try {
		const limit = Number(req.query.limit)
		const page = Number(req.query.page)
		const countries = await getManyCountriesService(limit, page)
		
		if (countries) {
            res.status(200).send(countries);
        }

	}catch(error){
		console.log( "failed to get countries : "+ error )
	}
}

export default getManyCountry