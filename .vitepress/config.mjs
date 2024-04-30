import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCATA",
  description: "UK Society of Computing and Technology in Anaesthesia",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Logbooks", link: "/logbooks" },
    ],

    sidebar: [
      {
        text: "Logbooks",
        link: "/logbooks",
        items: [
          { text: "Logbook Standards", link: "/logbook-standards" },
          { text: "Logbook Data Formats", link: "/logbook-data" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/scatauk/guidelines" },
    ],

    footer: {
      message:
        "<a style='text-decoration: dashed; text-decoration-line: underline;' href='https://github.com/scatauk/guidelines/blob/main/LICENSE.md'>MIT licensed</a>",
      copyright: "Copyright © 2024",
    },

    externalLinkIcon: true,
  },
});
