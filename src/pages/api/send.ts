import { render } from "@react-email/render";
import type { APIRoute } from "astro";
import { createElement } from "react";
import { Resend } from "resend";
import ContactEmail from "../../../emails/sample-email";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), { 
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Create Email
		const emailContent = createElement(ContactEmail, {
			name: name,
			email: email,
			message: message,
		});
		const html = await render(emailContent);
		const text = await render(emailContent, { plainText: true });

		const { data, error } = await resend.emails.send({
			from: "João Maria Botelho <notification@notification.joaomariabotelho.com>",
			to: ["joaomariastbotelho@gmail.com"],
			subject: "New message from João Maria Botelho website",
			html: html,
			text: text,
		});

		if (error) {
			return new Response(JSON.stringify({ success: false, error: error.message }), { 
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response(JSON.stringify({ success: true, data }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), { 
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

export const prerender = false;