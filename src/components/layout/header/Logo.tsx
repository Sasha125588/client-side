import Link from 'next/link'
import React from 'react'
import { IoMdPlanet } from 'react-icons/io'

export default function Logo() {
	const name = 'Space<X>'
	return (
		<div className='flex items-center justify-center text-center text-2xl font-semibold text-white'>
			<Link
				href='/'
				className='flex items-center justify-center text-center text-2xl font-semibold text-white'
			>
				<IoMdPlanet style={{ color: 'red' }} className='h-16 w-16' />
				<span className='ml-2'>{name}</span>
			</Link>
		</div>
	)
}
