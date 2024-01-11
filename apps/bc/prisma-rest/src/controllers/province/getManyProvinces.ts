import { Request, Response } from 'express';
import getManyProvincesService from '../../services/province/getManyProvinces.service';

const getManyProvinces = async (req: Request, res: Response) => {
	try {
		const countryId = Number(req.params.countryId)
		const provinces = await getManyProvincesService(countryId)
		
		if (provinces) {
            res.status(200).send(provinces);
        }

	}catch(error){
		console.log( "failed to get provinces : "+ error )
	}
}

export default getManyProvinces