import React from 'react';
import FAQ from './faq';
import Image from 'next/image';

export default function FAQSection() {
	return (
		<section id='faq' className='py-20 px-8 max-w-screen-xl mx-auto'>
			<div className='grid lg:grid-cols-5 gap-6'>
				<div className='col-span-2'>
					<h2 className='text-3xl font-medium text-gray-800'>
						Foire aux questions
					</h2>
					<p className='text-muted-foreground my-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem
						non eos.
					</p>
					<Image
						src={'/faq.png'}
						width={542.5}
						height={377.5}
						alt='faq'
						className='hidden lg:block'
					/>
				</div>
				<div className='flex flex-col gap-4 col-span-3'>
					{faqs.map((f, i) => (
						<FAQ answer={f.answer} question={f.question} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}

const faqs = [
	{
		question: 'Puis-je essayer votre service gratuitement ?',
		answer:
			"Oui, nous proposons une période d'essai gratuite de 30 jours pour tous nos nouveaux clients. Inscrivez-vous dès aujourd'hui pour commencer.",
	},
	{
		question: 'Comment puis-je contacter le support client ?',
		answer:
			'Notre équipe de support est disponible par email à support@radioreplace.com ou par téléphone au 01 23 45 67 89 du lundi au vendredi, de 9h à 18h.',
	},
	{
		question: 'Fournissez-vous des services de personnalisation ?',
		answer:
			'Oui, nous offrons des services de personnalisation pour adapter RadioReplace à vos besoins spécifiques. Contactez notre équipe commerciale pour en savoir plus.',
	},
	{
		question: 'Fournissez-vous des services de personnalisation ?',
		answer:
			'Oui, nous offrons des services de personnalisation pour adapter RadioReplace à vos besoins spécifiques. Contactez notre équipe commerciale pour en savoir plus.',
	},
	{
		question: 'Fournissez-vous des services de personnalisation ?',
		answer:
			'Oui, nous offrons des services de personnalisation pour adapter RadioReplace à vos besoins spécifiques. Contactez notre équipe commerciale pour en savoir plus.',
	},
];
