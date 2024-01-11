import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const getFiftyCitiesOfCountryService = async (limit = 50, pageNumber = 1) => {
	const before = Date.now()
	limit = Number(limit)
	pageNumber = Number(pageNumber)
	
	const countries= await prisma.country.findMany({
		take: limit*pageNumber,
		select: {
			name: true,
			abb: true,
			population:true,
			provinces: {
				take: limit*pageNumber,
				orderBy: {
					population: "desc"
				},
				select: {
					name: true,
					abb: true,
					population:true,
					cities: {
						select: {
							name: true,
							abb: true,
							population:true,
						},
						take: limit,
						orderBy: {
							population: "desc"
						},
					}
				}
			}
		}
	
	})

	const after = Date.now()
	const elapseTime = after - before
	console.log("Elapsed Time: ", elapseTime)

	return countries
}

export default getFiftyCitiesOfCountryService
