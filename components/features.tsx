import React from 'react';
import { Card, CardContent } from './ui/card';
import {
	Calendar,
	ChartColumnIncreasing,
	ChartSpline,
	File,
	Lock,
	LucideIcon,
	Smartphone,
} from 'lucide-react';

export default function Features() {
	return (
		<section
			id='fonctionnalites'
			className='py-20 bg-white max-w-screen-xl mx-auto'
		>
			<div className=' px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-medium text-black mb-2'>
						Pourquoi{' '}
						<span className='text-primary font-semibold'>Swap Rx?</span>
					</h2>
					<p className='text-muted-foreground'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
						perspiciatis rem saepe!
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<FeatureCard
						Icon={ChartColumnIncreasing}
						title='Gestion des remplacements'
						description='Trouvez et gérez facilement vos remplacements en quelques clics.'
					/>
					<FeatureCard
						Icon={File}
						title='Contrats intégrés'
						description="Utilisez des modèles de contrats pré-enregistrés pour simplifier l'administration."
					/>
					<FeatureCard
						Icon={Calendar}
						title='Calendrier des vacations'
						description='Gérez efficacement vos disponibilités et celles des remplaçants.'
					/>
					<FeatureCard
						Icon={Lock}
						title='Gestion des documents'
						description='Stockez et partagez en toute sécurité les documents importants.'
					/>
					<FeatureCard
						Icon={Smartphone}
						title='Application mobile'
						description='Accédez à vos informations où que vous soyez avec notre app mobile.'
					/>
					<FeatureCard
						Icon={ChartSpline}
						title='Statistiques et rapports'
						description='Analysez vos données de remplacement pour optimiser votre gestion.'
					/>
				</div>
			</div>
		</section>
	);
}

const FeatureCard = ({
	Icon,
	title,
	description,
}: {
	Icon: LucideIcon;
	title: string;
	description: string;
}) => (
	<div className='p-6 '>
		<div className='w-9 h-auto aspect-square mb-3 bg-primary flex justify-center items-center text-white rounded-md'>
			<Icon className='w-5 h-auto aspect-square ' />
		</div>
		<h3 className='text-xl font-semibold mb-2 '>{title}</h3>
		<p className='text-gray-600'>{description}</p>
	</div>
);
