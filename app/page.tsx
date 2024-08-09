import React from 'react';
import Contact from '@/components/contact';
import FAQSection from '@/components/faq_section';
import Features from '@/components/features';
import HeroSection from '@/components/hero';
import Temoignages from '@/components/temoignages';

const LandingPage = () => {
	return (
		<main className='flex-grow'>
			<HeroSection />
			<Features />
			<Temoignages />
			<FAQSection />
			<Contact />
		</main>
	);
};

export default LandingPage;
