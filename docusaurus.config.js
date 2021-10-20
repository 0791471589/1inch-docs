// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1inch Network',
  tagline: 'The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.',
  url: 'https://1inch.io',
  baseUrl: '/new-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: '1inch', // Usually your GitHub org/user name.
  projectName: '1inch-docs', // Usually your repo name.

  plugins: ['@docusaurus/plugin-google-gtag'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/1inch/1inch-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1inch/1inch-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '1inch',
        logo: {
          alt: '1inch',
          src: 'https://app.1inch.io/assets/images/1inch_logo_without_text.svg',
        },
        items: [
          {
            href: 'https://app.1inch.io',
            label: 'App',
            position: 'left',
          },
          {
            href: '/docs/aggregation-protocol/introduction',
            label: 'Do swaps',
            position: 'left',
          },
          {
            href: '/docs/liquidity-protocol/introduction',
            label: 'Manage liquidity',
            position: 'left',
          },
          {
            href: '/docs/limit-order-protocol/introduction',
            label: 'Trade limit orders',
            position: 'left',
          },
          {
            href: 'https://github.com/1inch',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 1inch Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        trackingID: 'UA-142133284-1'
      },
    }),
};

module.exports = config;
