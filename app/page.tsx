import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import FAQSection from '@/components/faq_section';
import Header from '@/components/header';
import Features from '@/components/features';

const LandingPage = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<section
					id='accueil'
					className='py-20 bg-gradient-to-b from-[#E6F7F8] to-gray-50'
				>
					<div className='max-w-screen-xl mx-auto px-4'>
						<div className='flex flex-col md:flex-row items-center'>
							<div className='md:w-1/2 mb-10 md:mb-0'>
								<h2 className='text-5xl font-bold mb-4 text-gray-800'>
									Solution de Gestion pour Remplacements en Radiologie
								</h2>
								<p className='text-xl text-gray-600 mb-8'>
									Simplifiez vos remplacements et optimisez votre temps avec
									RadioReplace
								</p>
								<div className='flex space-x-4'>
									<Button
										size='lg'
										className='bg-[#20A9B1] hover:bg-[#1C8A91] text-white'
									>
										Demander une démo
									</Button>
									<Button
										size='lg'
										variant='outline'
										className='border-[#20A9B1] text-[#20A9B1] hover:bg-[#E6F7F8]'
									>
										Télécharger
									</Button>
								</div>
							</div>
							<div className='md:w-1/2 flex justify-center items-center'>
								<Image
									src='/swipe_doctor.png'
									alt='RadioReplace Dashboard'
									className='rounded-lg'
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</section>

				<Features />

				{/* <section id='temoignages' className='py-20 bg-[#E6F7F8]'>
					<div className='container mx-auto px-4'>
						<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
							Témoignages
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<TestimonialCard
								name='Dr. Sophie Martin'
								role='Radiologue'
								content="Grâce à RadioReplace, j'ai pu trouver rapidement un remplaçant pour mes congés. C'est un gain de temps considérable !"
							/>
							<TestimonialCard
								name='Thomas Dubois'
								role='Manipulateur en radiologie'
								content="L'application m'a permis de trouver facilement des vacations. L'interface est intuitive et les contrats sont simples à signer."
							/>
						</div>
					</div>
				</section> */}

				<FAQSection />

				<Contact />
			</main>
			<Footer />
		</div>
	);
};

const TestimonialCard = ({
	name,
	role,
	content,
}: {
	name: string;
	role: string;
	content: string;
}) => (
	<Card className='bg-white'>
		<CardContent className='p-6'>
			<p className='text-gray-600 mb-4'>&quot;{content}&quot;</p>
			<div>
				<p className='font-semibold text-[#20A9B1]'>{name}</p>
				<p className='text-sm text-gray-500'>{role}</p>
			</div>
		</CardContent>
	</Card>
);

export default LandingPage;
