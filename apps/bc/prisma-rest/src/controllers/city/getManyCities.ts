import { Request, Response } from 'express'
import getManyCitiesService from '../../services/city/getManyCities.service'

const getManyCities = async (req: Request, res: Response) => {
	try {
		const provinceId = Number(req.params.provinceId)
		// const limit = Number(req.query.limit)
		const city = await getManyCitiesService(provinceId)
		
		if (city) {
            res.status(200).send(city);
        }

	}catch(error){
		console.log( "failed to get cities : "+ error )
	}
}

export default getManyCities