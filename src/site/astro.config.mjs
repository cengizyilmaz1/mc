import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mc.merill.net',
  integrations: [starlight({
    title: "M365 MC Archive",
    logo: {
      light: './src/assets/logo.svg',
      dark: './src/assets/logo-dark.svg'
    },
    customCss: ['/src/styles/tailwind.docs.css'],
    sidebar: [{
      label: "MC Archive",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "🏠 Home",
        link: "/"
      }, {
        label: "merill.net ",
        link: "https://merill.net"
      }, {
        label: "Entra.News ",
        link: "https://entra.news"
      }]
    }, {
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }],
    lastUpdated: true,
    pagination: false,
    social: {
      youtube: "https://youtube.com/@merillx",
      linkedin: "https://www.linkedin.com/in/merill",
      mastodon: "https://infosec.exchange/@merill",
      threads: "https://www.threads.net/@merillf",
      twitter: "https://twitter.com/merill",
      "x.com": "https://x.com/merill",
      github: "https://github.com/merill"
    },
    components: {
      //Override the default components
      ThemeSelect: './src/components/StarlightOverride/ThemeSelect.astro'
    }
  }), react()]
});