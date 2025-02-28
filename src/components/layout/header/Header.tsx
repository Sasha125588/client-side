'use client'

import ChangeLanguageForm from './ChangeLanguage'
import Logo from './Logo'
import Profile from './Profile'
import SelectPlanet from './SelectPlanet'
import Navigation from './navigation/Navigation'

export default function Header() {
	return (
		<div className='flex w-full items-center justify-between bg-[url(../public/images/2k_stars.jpg)] bg-cover px-12 pt-3 pb-3 text-center'>
			<Logo />
			<Navigation />
			<div className='flex items-center justify-center gap-8'>
				<SelectPlanet />
				<ChangeLanguageForm />
				<Profile />
			</div>
		</div>
	)
}
