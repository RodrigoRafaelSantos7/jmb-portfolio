import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import siteConfig from "./src/data/site-config";

export default defineConfig({
  site: siteConfig.website,
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        ri: ["arrow-right-up-line"],
      },
    }),
  ],
});
