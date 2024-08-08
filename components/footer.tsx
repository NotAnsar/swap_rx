import Image from 'next/image';
import Link from 'next/link';
import { Links } from './header';

export default function Footer() {
	return (
		<footer className='border-t border-border'>
			<div className='max-w-screen-xl mx-auto py-12 px-8 w-full '>
				<div className='flex-col gap-12 md:flex-row flex justify-between'>
					<div className='flex flex-col gap-3'>
						<div className='flex gap-2 cursor-pointer group items-center'>
							<Link
								href={'/'}
								className='cursor-pointer text-3xl font-semibold text-primary'
							>
								Swap Rx
							</Link>
						</div>
						<p className='text-[15px] text-muted-foreground w-full sm:w-[450px] mb-4'>
							{
								"Simplifiez la gestion des remplacements avec SwapRX. Optimisez votre temps et concentrez-vous sur l'essentiel pour propulser votre succès."
							}
						</p>

						<div className='mb-4 flex gap-4'>
							<Image
								src='/app_store.svg'
								alt='App Store'
								width={120}
								height={40}
							/>
							<Image
								src='/play_store.svg'
								alt='Google Play'
								width={120}
								height={40}
							/>
						</div>
					</div>
					<div className='flex gap-12'>
						<ul className='text-sm text-[#696969] flex flex-col gap-4 font-medium'>
							<li className='text-xs mb-1.5 font-semibold uppercase text-primary'>
								Pages
							</li>
							{Links.map((l) => (
								<li
									className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'
									key={l.label}
								>
									<Link href={l.link}>{l.label}</Link>
								</li>
							))}
						</ul>
						<ul className='text-sm text-[#696969] flex flex-col gap-4 font-medium'>
							<li className='text-xs font-semibold uppercase text-primary mb-1.5'>
								Legal
							</li>
							{LEGAL.map((l) => (
								<li
									className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'
									key={l.label}
								>
									<Link href={l.path}>{l.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<p className='mt-4 text-center text-sm w-full'>
					© 2024 RadioReplace. Tous droits réservés.
				</p>
			</div>
		</footer>
	);
}

const LEGAL = [
	{
		label: 'Politique de confidentialité',
		path: '/terms/politique-de-confidentialite',
	},
	{ label: 'Politique de Cookies', path: '/terms/politique-de-cookie' },
];
