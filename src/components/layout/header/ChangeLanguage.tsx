'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { setLanguage } from '@/libs/i18n/language'

import {
	TypeChangeLanguageSchema,
	changeLanguageSchema
} from '@/schemas/change-language.schema'

import { Form, FormField } from '../ui/common/Form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/common/Select'

const languages = {
	ru: 'UA',
	en: 'EN'
}

export default function ChangeLanguageForm() {
	const [isPending, startTransition] = useTransition()
	const locale = useLocale()

	const form = useForm<TypeChangeLanguageSchema>({
		resolver: zodResolver(changeLanguageSchema),
		values: {
			language: locale as TypeChangeLanguageSchema['language']
		}
	})

	function onSubmit(data: TypeChangeLanguageSchema) {
		startTransition(async () => {
			try {
				await setLanguage(data.language)
			} catch (error) {
				console.error(error)
				throw new Error('Something went wrong')
			}
		})
	}

	return (
		<Form {...form}>
			<FormField
				control={form.control}
				name='language'
				render={({ field }) => (
					<Select
						onValueChange={value => {
							field.onChange(value)
							form.handleSubmit(onSubmit)()
						}}
						value={field.value}
					>
						<SelectTrigger className='w-[70px] bg-white'>
							<SelectValue placeholder={locale} />
						</SelectTrigger>
						<SelectContent>
							{Object.entries(languages).map(([code, name]) => (
								<SelectItem key={code} value={code}>
									{name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			/>
		</Form>
	)
}
