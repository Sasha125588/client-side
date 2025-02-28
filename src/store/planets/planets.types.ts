export interface IplanetInfo {
	name: string
	className: string
	pictureSize: string
	x_position: string
	scale: number
	tagline: string
	tagline_icon: string
	picture: string
	textureUrl: string
	description: string
	distanceFromSun: string
	yearLength: string
	numberOfMoons: number
	namesake: string
	rings: {
		url_exists: boolean
	}
	spaceTexture_url: string
}

export interface PlanetsStore {
	planets: IplanetInfo[]
	planet: IplanetInfo | null
	isLoading: boolean
	setCurrentPlanet: (planet: IplanetInfo) => void
	fetchPlanets: () => void
}
