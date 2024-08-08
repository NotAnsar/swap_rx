import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Contact from '@/components/contact';
import FAQSection from '@/components/faq_section';
import Features from '@/components/features';
import HeroSection from '@/components/hero';

const LandingPage = () => {
	return (
		<main className='flex-grow'>
			<HeroSection />

			<Features />

			<section id='temoignages' className='py-20 bg-[#E6F7F8]'>
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
			</section>

			<FAQSection />

			<Contact />
		</main>
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
