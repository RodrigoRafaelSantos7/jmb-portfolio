import { pretty, render } from "@react-email/render";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import React, { createElement } from "react";
import { Resend } from "resend";
import ContactEmail from "../../emails/sample-email";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			email: z.string(),
			name: z.string(),
			message: z.string(),
		}),
		handler: async ({ name, email, message }) => {
			const emailContent = createElement(ContactEmail, {
				name: name,
				email: email,
				message: message,
			});
			const html = await render(emailContent);
			const text = await render(emailContent, { plainText: true });

			const { data, error } = await resend.emails.send({
				from: "João Maria Botelho <notification@notification.joaomariabotelho.com>",
				to: ["joaomariastbotelho@gmail.com","rodrigorafaelsantos7@icloud.com"],
				subject: "New message from João Maria Botelho website",
				html,
				text,
			});

			if (error) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: error.message,
				});
			}

			return data;
		},
	}),
};
