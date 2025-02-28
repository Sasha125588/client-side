'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useGalleryStore } from '@/store/gallery/gallery.store'
import { IPhoto } from '@/store/gallery/gallery.types'

import { getRandomColor } from '@/utils/color'

export default function GalleryItem({ photo }: { photo: IPhoto }) {
	const [randomColor, setRandomColor] = useState('')

	useEffect(() => {
		setRandomColor(getRandomColor())
	}, [])

	const router = useRouter()
	const setCurrentPhoto = useGalleryStore(state => state.setCurrentPhoto)

	const handleClick = () => {
		router.push(`/gallery/${photo.title}`)
		setCurrentPhoto(photo)
	}

	return (
		<div className='relative h-[455px] w-[400px] rounded-xl bg-zinc-900'>
			<div className='group relative cursor-pointer' onClick={handleClick}>
				<div
					style={{
						backgroundColor: randomColor
					}}
					className='absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100'
				></div>
				<img
					className='h-[300px] w-[400px] rounded-t-xl object-cover transition-all group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rounded-b-xl'
					src={photo.url}
				/>
			</div>
			<div className='mt-1 truncate overflow-hidden px-2 text-center'>
				<span className='text-base font-bold text-white'>{photo.title}</span>
			</div>
			<div className='pt-3'>
				<p className='h-[102px] overflow-hidden px-2 indent-3 text-sm text-ellipsis text-white'>
					{photo.explanation}
				</p>
			</div>
		</div>
	)
}
