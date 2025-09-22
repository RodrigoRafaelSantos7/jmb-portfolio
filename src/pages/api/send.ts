import { render } from "@react-email/render";
import type { APIRoute } from "astro";
import { createElement } from "react";
import { Resend } from "resend";
import ContactEmail from "../../../emails/sample-email";

const resend = new Resend(import.meta.env.RESEND_API_KEY);


export const GET: APIRoute = async () => {
	//Create Email
	const emailContent = createElement(ContactEmail, {
		name: "João Maria Botelho",
		email: "joaomariastbotelho@gmail.com",
		message: "Hello, world!",
	});
	const html = await render(emailContent);
	const text = await render(emailContent, { plainText: true });

	const { data, error } = await resend.emails.send({
		from: "João Maria Botelho <notification@notification.joaomariabotelho.com>",
		to: ["rodrigorafaelsantos7@icloud.com"],
		subject: "New message from João Maria Botelho website",
		html: html,
		text: text,
	});

	if (error) {
		return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
	}


	return new Response(JSON.stringify({ success: true }));
};

export const prerender = false;