import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getManyProvincesService = async ( countryId:number,limit=10, skip=0) => {
	return await prisma.province.findMany({
		where: {
			countryId,
		},
		take:limit,
		skip:skip
	});	
}

export default getManyProvincesService