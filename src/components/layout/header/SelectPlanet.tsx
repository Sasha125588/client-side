'use client'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { usePlanetsStore } from '@/store/planets/planets.store'
import { IplanetInfo } from '@/store/planets/planets.types'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/common/Select'

export default function SelectPlanet() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const [planetSession, setPlanetSession] = useState<IplanetInfo | null>(null)

	const planet = planetSession ?? usePlanetsStore(state => state.planet)

	useEffect(() => {
		const planet = sessionStorage.getItem('planet')

		if (planet) {
			setPlanetSession(JSON.parse(planet))
		}
	}, [planet])

	const t = useTranslations('header')

	const router = useRouter()
	const planets = usePlanetsStore(state => state.planets)
	const fetchPlanets = usePlanetsStore(state => state.fetchPlanets)

	useEffect(() => {
		fetchPlanets()
	}, [fetchPlanets])

	const setCurrentPlanet = usePlanetsStore(state => state.setCurrentPlanet)

	useEffect(() => {
		const keypress = (event: KeyboardEvent) => {
			if (event.key === 'e') {
				setIsOpen(prev => !prev)
			}
		}

		document.addEventListener('keypress', keypress)
		return () => document.removeEventListener('keypress', keypress)
	}, [])

	const handleClick = (planet: IplanetInfo) => {
		router.push(`/planets/${planet?.name}`)
		setCurrentPlanet(planet as IplanetInfo)
	}

	const handleSelect = (value: string) => {
		const selectedPlanet = planets.find(p => p.name === value)
		if (selectedPlanet) {
			setCurrentPlanet(selectedPlanet)
			handleClick(selectedPlanet)
		}
	}

	const Placeholder = () => {
		const placeholder = planet ? planet.name : t('selectPlanet')

		if (!planet) return null
		return (
			<div className='flex gap-2'>
				<img
					style={{ width: 20, height: 20 }}
					src={planet.picture}
					alt={planet.name}
				/>
				<p>{placeholder}</p>
			</div>
		)
	}

	return (
		<Select onValueChange={handleSelect} open={isOpen} onOpenChange={setIsOpen}>
			<SelectTrigger className='w-[200px] bg-white'>
				<SelectValue
					placeholder={
						pathname != `/planets/${planet?.name}`
							? t('selectPlanet')
							: Placeholder()
					}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup className=''>
					{planets.map(planet => (
						<SelectItem key={planet.name} value={planet.name}>
							<div className='flex gap-2'>
								<img
									style={{ width: 20, height: 20 }}
									src={planet.picture}
									alt={planet.name}
								/>
								{planet.name}
							</div>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
