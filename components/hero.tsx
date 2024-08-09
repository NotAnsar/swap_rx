import Image from 'next/image';
import React from 'react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HeroSection() {
	return (
		<section
			id='accueil'
			className='py-14 sm:py-20 bg-gradient-to-b from-[#E6F7F8] to-gray-50'
		>
			<div className='max-w-screen-xl mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center'>
					<div className='md:w-1/2 mb-10 md:mb-0 px-2'>
						<h2 className='text-4xl sm:text-5xl font-bold mb-4 text-gray-800 '>
							Solution de Gestion pour Remplacements en Radiologie
						</h2>
						<p className=' md:text-xl text-gray-600 mb-8'>
							Simplifiez vos remplacements et optimisez votre temps avec
							RadioReplace
						</p>
						<div className='flex-col sm:flex-row flex gap-4'>
							<Button
								size='lg'
								className='bg-primary hover:bg-primary text-white w-full sm:w-auto'
							>
								{"Télécharger l'application"}
							</Button>

							<Link
								href={'/#contact'}
								className={cn(
									buttonVariants({ size: 'lg', variant: 'outline' }),
									'border-primary text-primary hover:bg-[#E6F7F8] w-full sm:w-auto hover:text-primary'
								)}
							>
								Contactez-nous
							</Link>
						</div>
					</div>
					<div className='md:w-1/2 flex justify-center items-center'>
						<Image
							src='/swipe_doctor.png'
							alt='Swap Rx Hero Image'
							className='rounded-lg'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
