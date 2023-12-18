import { defineConfig } from "astro/config";
// import mdx from '@astrojs/mdx';
import partytown from "@astrojs/partytown";

// import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.joe-bor.me/",
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
