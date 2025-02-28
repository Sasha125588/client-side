'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { usePlanetsStore } from '@/store/planets/planets.store'

import PlanetsItem from './PlanetsItem'

export default function Planets() {
	const t = useTranslations('')

	const planets = usePlanetsStore(state => state.planets)
	const isLoading = usePlanetsStore(state => state.isLoading)
	const fetchPlanets = usePlanetsStore(state => state.fetchPlanets)

	useEffect(() => {
		if (planets.length === 0) {
			fetchPlanets()
		}
	}, [planets, fetchPlanets])

	{
		return isLoading ? (
			<div className='flex h-screen w-full items-center justify-center bg-[url(../public/images/2k_stars.jpg)] bg-cover bg-center text-4xl text-[#fff]'>
				{t('loading')}
			</div>
		) : (
			<div className='h-screen bg-[url(../public/images/2k_stars.jpg)]'>
				<motion.div className='flex w-full items-center justify-center'>
					{planets.map(planet => (
						<PlanetsItem planet={planet} key={planet.name} />
					))}
				</motion.div>
			</div>
		)
	}
}
