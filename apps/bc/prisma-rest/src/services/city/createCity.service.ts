import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const createCityService = async (cityInput : any) => {
	return await prisma.city.create({
		data: cityInput
	});	
}

export default createCityService