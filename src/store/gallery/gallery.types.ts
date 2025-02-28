export interface IPhoto {
	date: string
	copyright: string
	title: string
	media_type: string
	service_version: string
	hdurl: string
	explanation: string
	url: string
}

export interface GalleryStore {
	photos: IPhoto[]
	photo: IPhoto | null
	isLoading: boolean
	setCurrentPhoto: (photo: IPhoto) => void
	fetchPhotos: () => void
}
