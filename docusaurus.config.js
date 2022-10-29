// @ts-nocheck
const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "galactica-bot",
  staticDirectories: ["public"],
  tagline: "A free bot to get your Discord™ server up and running!",
  url: "https://galacticabot.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "jebediah47",
  projectName: "galactica-bot",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jebediah47/galactica-bot-docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "galactica-bot",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
        ],
      },
      algolia: {
        appId: process.env.ALGOLIA_APPID,
        apiKey: process.env.ALGOLIA_APIKEY,
        contextualSearch: false,
        indexName: "galacticabot",
        searchParameters: {},
        inputSelector: "h1",
        debug: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/nQd5HeD2xz",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/jebediah47/galactica-bot/issues",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/jebediah47/galactica-bot",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christian Llupo. Made with ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          property: "og:title",
          content: "Galactica bot documentation",
        },
        {
          property: "og:description",
          content:
            "A free and open-source bot to get your Discord™ server up and running! Galactica is fully customizable, start using Galactica today! 🚀🚀🚀",
        },
        {
          property: "og:image",
          content: "https://i.ibb.co/Lk17L0Q/og-image.png",
        },
      ],
    },
};

module.exports = config;
