import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send } from 'lucide-react';

export default function Contact() {
	return (
		<section id='contact' className='py-20 bg-[#E6F7F8] '>
			<div className='container mx-auto px-4 '>
				<div className='mb-12'>
					<h2 className='text-3xl font-medium text-center text-gray-800'>
						Nous sommes là pour <span className='text-primary'>vous aider</span>
					</h2>
					<p className='text-center mt-1.5 text-for'>
						{
							"Vous avez des questions ou des commentaires? N'hésitez pas à nous contacter."
						}
					</p>
				</div>

				<div className='max-w-xl mx-auto'>
					<form>
						<div className='mb-4 grid md:grid-cols-2 gap-4'>
							<Input type='text' placeholder='Nom' required />
							<Input type='email' placeholder='Email' required />
						</div>

						<div className='mb-4'>
							<Input type='text' placeholder='Sujet' required />
						</div>
						<div className='mb-4'>
							<Textarea placeholder='Message' rows={4} required />
						</div>
						<Button
							type='submit'
							className='w-full bg-primary hover:bg-[#1C8A91] text-white flex gap-2'
						>
							<Send className='w-4 h-auto aspect-square' /> Envoyer
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
