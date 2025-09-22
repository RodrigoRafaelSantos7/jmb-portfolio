import { pretty, render } from "@react-email/render";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import React from "react";
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
			const html = await pretty(
				await render(
					React.createElement(ContactEmail, {
						email: email,
						name: name,
						message: message,
					}),
				),
			);

			const { data, error } = await resend.emails.send({
				from: "João Maria Botelho <notification@notification.joaomariabotelho.com>",
				to: ["rodrigorafaelsantos7@icloud.com"],
				subject: "New message from João Maria Botelho website",
				html,
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
