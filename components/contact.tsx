// app/components/Contact.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Loader, Send } from 'lucide-react';
import { ContactState, submitContact } from '@/lib/contact-action';
import { cn } from '@/lib/utils';
import { useToast } from './ui/use-toast';

const initialState: ContactState = {
	message: null,
	errors: {},
};

export default function Contact() {
	const { toast } = useToast();
	const formRef = useRef<HTMLFormElement>(null);

	const [state, formAction] = useFormState<ContactState, FormData>(
		submitContact,
		initialState
	);

	useEffect(() => {
		if (state.message) {
			toast({
				description: state.message,
				title: state?.success ? 'Success' : 'Error',
				variant: state?.success ? 'success' : 'destructive',
			});
			if (formRef.current && state.success) {
				formRef.current.reset();
			}
		}
	}, [state, toast]);

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
					<form ref={formRef} action={formAction}>
						<div className='mb-4 grid md:grid-cols-2 gap-4'>
							<div>
								<Input
									type='text'
									name='name'
									placeholder='Nom'
									required
									className={cn(state.errors?.name && 'border-destructive')}
								/>
								{state.errors?.name && (
									<p className='text-destructive text-sm mt-1'>
										{state.errors.name[0]}
									</p>
								)}
							</div>
							<div>
								<Input
									type='email'
									name='email'
									placeholder='Email'
									required
									className={cn(state.errors?.email && 'border-destructive')}
								/>
								{state.errors?.email && (
									<p className='text-destructive text-sm mt-1'>
										{state.errors.email[0]}
									</p>
								)}
							</div>
						</div>

						<div className='mb-4'>
							<Input
								type='text'
								name='subject'
								placeholder='Sujet'
								required
								className={cn(state.errors?.subject && 'border-destructive')}
							/>
							{state.errors?.subject && (
								<p className='text-destructive text-sm mt-1'>
									{state.errors.subject[0]}
								</p>
							)}
						</div>
						<div className='mb-4'>
							<Textarea
								name='message'
								placeholder='Message'
								rows={4}
								required
								className={cn(state.errors?.message && 'border-destructive')}
							/>
							{state.errors?.message && (
								<p className='text-destructive text-sm mt-1'>
									{state.errors.message[0]}
								</p>
							)}
						</div>
						<SubmitButton />
					</form>
					{state.message && !state.success && (
						<p
							className={`mt-3 text-[15px] ${
								state.success ? 'text-green-500' : 'text-destructive'
							}`}
						>
							{state.message}
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			disabled={pending}
			type='submit'
			className='w-full bg-primary hover:bg-[#1C8A91] text-white flex gap-2'
		>
			{pending ? (
				<Loader className='w-4 h-auto aspect-square animate-spin' />
			) : (
				<Send className='w-4 h-auto aspect-square' />
			)}
			Envoyer
		</Button>
	);
}
