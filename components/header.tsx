import React from 'react';
import { Button } from './ui/button';
import { NavMobile } from './nav-mobile';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='bg-white shadow-sm sticky top-0 z-10'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='flex items-center'>
					<Link
						href={'/'}
						className='text-2xl font-bold text-primary cursor-pointer'
					>
						Swap Rx
					</Link>
				</div>
				<nav>
					<ul className='hidden md:flex space-x-6 text-[15px]'>
						{Links.map((l) => (
							<li key={l.label}>
								<a href={l.link} className='text-gray-600 hover:text-primary'>
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<Button className='hidden md:block border-[#1C8A91] border hover:bg-[#1C8A91] text-white transition-all duration-300 ease-out bg-primary'>
					{"Télécharger l'application"}
				</Button>
				<NavMobile />
			</div>
		</header>
	);
}

export const Links = [
	{ label: 'Accueil', link: '/#accueil' },
	{ label: 'Fonctionnalités', link: '/#fonctionnalites' },
	{ label: 'Témoignages', link: '/#temoignages' },
	{ label: 'Contact', link: '/#contact' },
];
