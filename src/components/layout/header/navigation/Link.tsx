'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/libs/utils'

interface CustomLinkProps {
	title: string
	href: string
}

export default function CustomLink({ title, href }: CustomLinkProps) {
	const pathname = usePathname()

	return (
		<Link href={href} className='group relative'>
			<motion.span className='' whileHover={{ scale: 1.1 }}>
				{title}
			</motion.span>
			<span
				className={cn(
					'ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-red-500 transition-[width] duration-300 group-hover:w-full',
					pathname == href ? 'w-full' : 'w-0'
				)}
			></span>
		</Link>
	)
}
