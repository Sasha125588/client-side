'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef
} from 'react'

import { cn } from '@/libs/utils'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from '../../ui/common/NavigationMenu'

import CustomLink from './Link'

export default function Navigation() {
	const t = useTranslations('header.navigation')

	return (
		<NavigationMenu>
			<NavigationMenuList className='flex gap-14 text-lg font-semibold text-white'>
				<NavigationMenuItem>
					<CustomLink title={t('planets')} href={'/planets'} />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<CustomLink title={t('research')} href={'/research'} />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<CustomLink title={t('projects')} href={'/projects'} />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<CustomLink title={t('gallery')} href={'/gallery'} />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<CustomLink title={t('about')} href={'/about'} />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = forwardRef<ComponentRef<'a'>, ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
							className
						)}
						{...props}
					>
						<div className='text-sm leading-none font-medium'>{title}</div>
						<p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		)
	}
)
ListItem.displayName = 'ListItem'
