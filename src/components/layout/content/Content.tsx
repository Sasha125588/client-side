import { useTranslations } from 'next-intl'

import { Separator } from '../ui/common/Separator'

const AppContent = () => {
	const t = useTranslations('home')
	return (
		<>
			<div className='flex h-full flex-col px-12 text-start text-white'>
				<div className='mt-16 w-[40%] tracking-wide'>
					<h2 className='pb-6 text-8xl font-semibold uppercase'>
						{t('title')}
					</h2>
					<Separator />
				</div>
				<div className='w-[500px] pt-6 text-lg text-gray-300'>
					<p className='font-semibold'>{t('description')}</p>
				</div>
			</div>
		</>
	)
}

export default AppContent
