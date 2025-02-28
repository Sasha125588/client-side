'use client'

import { useGalleryStore } from '@/store/gallery/gallery.store'

export default function Photo() {
	const photo = useGalleryStore(state => state.photo)
	if (!photo) return null

	return (
		<>
			<div className='bg-solarSystem text-white'>
				<div className='flex h-full justify-center bg-black text-white'>
					<div className=''>
						<div className='flex h-full w-[100%] justify-between bg-zinc-900 p-4'>
							<div className='flex w-[70%] flex-col items-center'>
								<h1 className='mb-3 text-xl font-semibold'>{photo.title}</h1>
								<img className='h-[700px] w-[90%] rounded-lg' src={photo.url} />
							</div>
							<div className='flex w-[30%] flex-col justify-between pt-6'>
								<p className='text-lg'>{photo.explanation}</p>
								<p className='text-xl font-semibold'>{photo.date}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
