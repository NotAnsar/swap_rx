import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Frown } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='flex h-[90vh] flex-col items-center justify-center gap-1.5'>
			<Frown className='w-10 text-muted-foreground' />
			<h2 className='text-xl font-semibold'>404 Non Trouvé</h2>
			<p>Impossible de trouver la page demandée.</p>
			<Link href='/' className={cn(buttonVariants(), 'mt-2')}>
				{"Retour à la page d'accueil"}
			</Link>
		</main>
	);
}
