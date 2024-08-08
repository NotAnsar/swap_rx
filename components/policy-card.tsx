'use client';

import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function PolicyCard({ className }: { className: string }) {
	const path = usePathname();
	return (
		<nav
			className={cn(
				// 'flex flex-col rounded-lg p-4 gap-1 border border-border w-full',
				'flex flex-col rounded-lg gap-1 w-full',
				className
			)}
		>
			{LEGAL.map((l) => (
				<Link
					href={l.path}
					key={l.path}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'flex w-full h-12 justify-start text-[15px] font-normal hover:text-primary hover:bg-primary/15 text-wrap',
						l.path === path && 'text-primary bg-primary/15'
					)}
				>
					{l.label}
				</Link>
			))}
		</nav>
	);
}

export const LEGAL = [
	{
		label: 'Politique de confidentialité',
		path: '/terms/politique-de-confidentialite',
	},

	{ label: 'Politique de Cookies', path: '/terms/politique-de-cookie' },
	{
		label: 'Politique de Traitement des Données',
		path: '/terms/politique-de-traitement-des-donnees',
	},
	{
		label: 'Politique de Propriété Intellectuelle',
		path: '/terms/politique-de-propriete-intellectuelle',
	},
];
