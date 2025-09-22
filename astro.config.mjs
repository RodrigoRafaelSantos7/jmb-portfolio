import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://joaomariabotelho.com",
	output: "server",
	vite: {
		plugins: [tailwindcss()],
		build: {
			target: "esnext",
		},
		esbuild: {
			target: "esnext",
		},
	},
	adapter: vercel({
		webAnalytics: {
			enabled: true, // set to false when using @vercel/analytics@1.4.0
		},
	}),
	integrations: [
		react(),
		mdx(),
		sitemap(),
		icon({
			include: {
				ri: ["arrow-right-up-line"],
			},
		}),
	],
});
