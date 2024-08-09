'use server';

import { z } from 'zod';
import { sendEmail } from '@/lib/email';
import { revalidatePath } from 'next/cache';

const ContactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	subject: z.string().min(1, 'Subject is required'),
	message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export interface ContactState {
	message: string | null;
	errors?: { [K in keyof ContactFormData]?: string[] };
	success?: boolean;
}

export async function submitContact(
	prevState: ContactState,
	formData: FormData
): Promise<ContactState> {
	const validatedFields = ContactSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		subject: formData.get('subject'),
		message: formData.get('message'),
	});

	if (!validatedFields.success) {
		return {
			message: 'Validation failed',
			errors: validatedFields.error.flatten().fieldErrors,
			success: false,
		};
	}

	const { name, email, subject, message } = validatedFields.data;

	try {
		// await sendEmail({
		// 	to: process.env.EMAIL as string,
		// 	subject: `New contact form submission: ${subject}`,
		// 	body: `
		//     Name: ${name}
		//     Email: ${email}

		//     Message:
		//     ${message}
		//   `,
		// });

		return { message: 'Message sent successfully!', success: true };
	} catch (error) {
		console.error('Failed to send email:', error);
		return {
			message: 'Failed to send message. Please try again later.',
			success: false,
		};
	}
}
