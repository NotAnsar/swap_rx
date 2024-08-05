import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='max-w-screen-xl mx-auto py-12 px-8 w-full'>
			{/* <footer className='max-w-screen-xl mx-auto py-12 px-8 flex-col gap-12 md:flex-row flex justify-between w-full '> */}
			<div className='flex-col gap-12 md:flex-row flex justify-between'>
				<div className='flex flex-col gap-3'>
					<div className='flex gap-2 cursor-pointer group items-center'>
						<h3 className=' text-3xl font-semibold'>Swap Rx</h3>
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
						{LINKS.map((l) => (
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
						<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
							Privacy policy
						</li>
						<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
							Terms of service
						</li>
					</ul>
				</div>
			</div>

			<p className='mt-4 text-center text-sm w-full'>
				© 2024 RadioReplace. Tous droits réservés.
			</p>
		</footer>
	);
}

const LINKS = [
	{ label: 'Testimonials', link: '#testimonials' },
	{ label: 'Pricing', link: '#pricing' },
	{ label: 'Mission', link: '#mission' },
	{ label: 'Features', link: '#features' },
	{ label: 'Contact', link: '#contact' },
];
