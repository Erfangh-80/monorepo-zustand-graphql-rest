import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getManyCountries = async ( limit=10, page=1) => {
	const skip = (page - 1) * limit
	
	return await prisma.country.findMany({
		take:limit,
		skip
	});	
}

export default getManyCountries