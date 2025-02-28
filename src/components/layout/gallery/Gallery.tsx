'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { useGalleryStore } from '@/store/gallery/gallery.store'

import GalleryItem from './GalleryItem'

export default function Gallery() {
	const t = useTranslations('')
	const fetchPhotos = useGalleryStore(state => state.fetchPhotos)
	const photos = useGalleryStore(state => state.photos)
	const isLoading = useGalleryStore(state => state.isLoading)

	useEffect(() => {
		if (photos.length === 0) {
			fetchPhotos()
		}
	}, [photos, fetchPhotos])

	{
		return isLoading ? (
			<div className='flex h-screen w-full items-center justify-center bg-[url(../public/images/2k_stars.jpg)] bg-cover bg-center text-4xl text-[#fff]'>
				{t('loading')}
			</div>
		) : (
			<div className='bg-solarSystem flex flex-wrap justify-center gap-6 bg-[url(../public/images/2k_stars.jpg)] pb-3'>
				{photos.map((photo, index) => (
					<GalleryItem photo={photo} key={index} />
				))}
			</div>
		)
	}
}
