import { create } from 'zustand'

import { GalleryStore, IPhoto } from './gallery.types'

export const useGalleryStore = create<GalleryStore>(set => ({
	photos: [],
	photo: null,
	isLoading: false,
	setCurrentPhoto: (photo: IPhoto) => set(state => ({ photo: photo })),
	fetchPhotos: async () => {
		set({ isLoading: true })
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'X-API-KEY': 'NWo7LVkiVh8dNMP9TwYCsNE55kFj1YXnplZ4HzfD'
			}
		}
		const res = await fetch(
			'https://api.nasa.gov/planetary/apod?api_key=NWo7LVkiVh8dNMP9TwYCsNE55kFj1YXnplZ4HzfD&count=31&thumbs=true',
			options
		)
		set({ photos: await res.json(), isLoading: false })
	}
}))
