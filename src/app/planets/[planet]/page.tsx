'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { usePlanetsStore } from '@/store/planets/planets.store'
import { IplanetInfo } from '@/store/planets/planets.types'

export default function PlanetPage() {
	const [planetSession, setPlanetSession] = useState<IplanetInfo | null>(null)

	const planet = planetSession ?? usePlanetsStore(state => state.planet)

	useEffect(() => {
		const planet = sessionStorage.getItem('planet')

		if (planet) {
			setPlanetSession(JSON.parse(planet))
		}
	}, [planet])

	if (!planet) return null

	return (
		<div className='h-screen bg-[url(../public/images/2k_stars.jpg)]'>
			<div className='flex justify-between text-white'>
				<div className='flex w-[50%] flex-col p-4'>
					<h2 className='text-6xl font-semibold'>{planet.name}</h2>
					<div className='flex items-center gap-3 pt-3'>
						<motion.img
							className='h-[30px] w-[30px]'
							src={planet.tagline_icon}
							alt={planet.tagline}
						/>
						<h3 className='text-lg'>{planet.tagline}</h3>
					</div>
					<div className='flex justify-between'>
						<div className='flex flex-col gap-2 pt-10 text-base'>
							<h4>
								Distance from sun:{' '}
								<p className='font-semibold'>{planet.distanceFromSun}</p>{' '}
							</h4>
							<h4>
								Year length:{' '}
								<p className='font-semibold'>{planet.yearLength}</p>
							</h4>
							<h4>
								Number of moons:{' '}
								<p className='font-semibold'>{planet.numberOfMoons}</p>
							</h4>
							<h4>
								Namesake: <p className='font-semibold'>{planet.namesake}</p>
							</h4>
						</div>
						<motion.img
							className={planet.pictureSize}
							src={planet.picture}
							alt={planet.name}
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 80 }}
						/>
					</div>
					<p className='text-xl'>{planet.description}</p>
				</div>
				<div className='h-[700px] w-[700px] pt-6 pr-6'>
					<img
						className='h-[100%] w-[100%]'
						src={planet.textureUrl}
						alt={planet.name}
					/>
				</div>
			</div>
		</div>
	)
}
