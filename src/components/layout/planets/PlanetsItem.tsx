'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { usePlanetsStore } from '@/store/planets/planets.store'
import { IplanetInfo } from '@/store/planets/planets.types'

const Planet = ({
	name,
	className,
	scale,
	picture,
	x
}: {
	name: string
	className: string
	scale: number
	picture: string
	x: string
}) => {
	return (
		<motion.div
			className='shadow-dark absolute flex cursor-pointer flex-col items-center justify-center rounded-full text-center font-semibold'
			style={{ x }}
			whileInView={{ x: x }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
		>
			<p className='text-lg text-white'>{name}</p>
			<motion.img
				whileHover={{ scale: scale }}
				className={className}
				src={picture}
				alt={name + 'picture'}
			/>{' '}
		</motion.div>
	)
}

export default function PlanetsItem({ planet }: { planet: IplanetInfo }) {
	const router = useRouter()
	const setCurrentPlanet = usePlanetsStore(state => state.setCurrentPlanet)

	const handleClick = () => {
		router.push(`/planets/${planet.name}`)
		setCurrentPlanet(planet)
	}

	return (
		<div>
			<motion.div
				className='bg-solarSystem flex h-full items-center pt-60 text-white'
				onClick={handleClick}
			>
				<Planet
					name={planet.name}
					className={planet.className}
					scale={planet.scale}
					x={planet.x_position}
					picture={planet.picture}
				/>
			</motion.div>
		</div>
	)
}
