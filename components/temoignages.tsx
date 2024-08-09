import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function Temoignages() {
	return (
		<section id='temoignages' className='py-20 bg-[#E6F7F8]'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='text-3xl font-medium text-black mb-2'>
						Ce que <span className='text-primary'>nos clients</span> disent de
						nous.
					</h2>
					<p>
						Découvrez ce que les clients ont dit de leur expérience avec Swap
						Rx.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
					<TestimonialCard
						name='Thomas Dubois'
						role='Manipulateur en radiologie'
						content="L'application m'a permis de trouver facilement des vacations. L'interface est intuitive et les contrats sont simples à signer."
					/>
				</div>
			</div>
		</section>
	);
}

const TestimonialCard = ({
	name,
	role,
	content,
}: {
	name: string;
	role: string;
	content: string;
}) => (
	<Card className='bg-white shadow-lg'>
		<CardContent className='p-8 text-center'>
			<Quote className='w-9 h-auto aspect-square text-primary mx-auto mb-4' />
			<p className='text-gray-600 mb-4 '>&quot;{content}&quot;</p>
			<div className='mt-auto'>
				<p className='font-semibold text-primary'>{name}</p>
				<p className='text-sm text-gray-500'>{role}</p>
			</div>
		</CardContent>
	</Card>
);
