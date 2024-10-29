import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCATA",
  description: "UK Society of Computing and Technology in Anaesthesia",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",

    siteTitle: 'SCATA | Guidelines',

    nav: [
      { text: "Guidelines Home", link: "/" },
      { text: "Logbooks", link: "/logbooks" },
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
      {
        icon: {
          svg: '<svg width="478px" height="782px" viewBox="0 0 478 782" xmlns="http://www.w3.org/2000/svg"><g fill="#273D75" fill-rule="nonzero"><polygon points="0 296.391853 478 463 478 345.341416 117.696226 229.928225 478 114.964113 478 0 0 166.608147"/><polygon transform="translate(0, 319)" points="478 166.608147 0 0 0 117.658584 359.85283 232.622696 0 348.035887 0 463 478 296.391853"/></g></svg>'
        },
        link: 'https://scata.org.uk',
        ariaLabel: 'SCATA Homepage'
      }
    ],

    footer: {
      message:
        "<p><a href='https://www.scata.org.uk' style='text-decoration: dashed; text-decoration-line: underline;'><img width='12px' src='logo.svg' style='display: inline; padding-right: 4px;'>SCATA Homepage</a></p><p><a style='text-decoration: dashed; text-decoration-line: underline;' href='https://github.com/scatauk/guidelines/blob/main/LICENSE.md'>MIT licensed</a></p>",
      copyright: "Copyright © 2024",
    },

    externalLinkIcon: true,
  },
});
