import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getManyCitiesService = async (provinceId : number, limit=10, skip=0) => {
	return await prisma.city.findMany({
		where: {
			provinceId
		},
		take:limit,
		skip
	});	
}

export default getManyCitiesService