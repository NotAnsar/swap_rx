import nodemailer from 'nodemailer';

interface EmailParams {
	to: string;
	subject: string;
	body: string;
}

export async function sendEmail({
	to,
	subject,
	body,
}: EmailParams): Promise<void> {
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SERVER,
		port: parseInt(process.env.EMAIL_PORT || '587', 10),
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to,
		subject,
		text: body,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.error('Error sending email:', error);
		throw new Error('Failed to send email');
	}
}
