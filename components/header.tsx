import React from 'react';
import { Button } from './ui/button';

export default function Header() {
	return (
		<header className='bg-white shadow-sm sticky top-0 z-10'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='flex items-center'>
					<h1 className='text-2xl font-bold text-gray-800'>Swap Rx</h1>
				</div>
				<nav>
					<ul className='hidden md:flex space-x-6'>
						<li>
							<a href='#accueil' className='text-gray-600 hover:text-primary'>
								Accueil
							</a>
						</li>
						<li>
							<a
								href='#fonctionnalites'
								className='text-gray-600 hover:text-primary'
							>
								Fonctionnalités
							</a>
						</li>
						<li>
							<a
								href='#temoignages'
								className='text-gray-600 hover:text-primary'
							>
								Témoignages
							</a>
						</li>
						<li>
							<a href='#contact' className='text-gray-600 hover:text-primary'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<Button className='bg-primary hover:bg-[#1C8A91] text-white'>
					Demander une démo
				</Button>
			</div>
		</header>
	);
}
