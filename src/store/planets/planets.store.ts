import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IplanetInfo, PlanetsStore } from './planets.types'
import { GetPlanetsInfo } from '@/shared/api/planets/data'

export const usePlanetsStore = create<PlanetsStore>()(
	persist(
		set => ({
			planets: [],
			planet: null,
			isLoading: false,
			setCurrentPlanet: (planet: IplanetInfo) => set({ planet: planet }),
			fetchPlanets: async () => {
				set({ isLoading: true })

				set({ planets: GetPlanetsInfo(), isLoading: false })
			}
		}),
		{
			name: 'planets',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
)
