module.exports = {
  title: "Test Site",
  tagline: "The tagline of Test Site",
  url: "https://plugin.vercel.app",
  baseUrl: "./testsite",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Comp-Labs", // Usually your GitHub org/user name.
  projectName: "docusaurus-plugin-vercel-analytics", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Test Site",
      logo: {
        alt: "Test Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Comp-Labs/docusaurus-plugin-vercel-analytics",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/GAbzAGKccW",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Comp-Labs/docusaurus-plugin-vercel-analytics",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tech Fiddle. All Rights Reserved.`,
    },
  },
  markdown: {
    // By default we compile all files as MDX (allow JSX), but you can opt-in for CommonMark if you want
    // See https://github.com/facebook/docusaurus/pull/9097
    // format: 'mdx', 

    mdx1Compat: {
      // Allow html comments in MDX files like blog `<!-- truncate -->` markers
      comments: false,
      // Allow former admonition title syntax :::note Title instead of new syntax :::note[Title]
      admonitions: false,
      // Allow usage of unescaped {#headingId} syntax instead of \{#headingId}
      headingIds: false
    },

    // Gives you opportunity to apply your own string processing before the MDX compilation
    // Usage is NOT recommended, use this as a last resort escape hatch or temporarily)
    // preprocessor: ({ filePath, fileContent }) => {
    //   return fileContent;
    // }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Comp-Labs/docusaurus-plugin-vercel-analytics/edit/main/testsite/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Comp-Labs/docusaurus-plugin-vercel-analytics/edit/main/testsite/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // THIS IS YOUR PLUGIN'S ENTRYPOINT.
  // YOU CAN TEST IT OUT WITH DIFFERENT OPTIONS BY PASSING THEM IN THE OBJECT LITERAL
  plugins: [
    [
      require.resolve("../build/index.js"),
      {
        // options here, or if you have none, just leave this empty.
      },
    ],
  ],
}
