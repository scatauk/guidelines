import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCATA",
  description: "UK Society of Computing and Technology in Anaesthesia",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Logbooks", link: "/logbooks" },
    ],

    // sidebar: [
    //   {
    //     text: "Logbooks",
    //     link: "/logbooks",
    //     items: [
    //       { text: "Logbook Standards", link: "/logbook-standards" },
    //       { text: "Logbook Data Formats", link: "/logbook-data" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/scatauk/guidelines" },
    ],

    footer: {
      message: "MIT licensed",
      copyright: "Copyright © 2023",
    },

    externalLinkIcon: true,
  },
});
