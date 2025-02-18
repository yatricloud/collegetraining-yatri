const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // Optional: If your docs are inside the `/docs` folder, specify it here.
  defaultLocale: 'en',
  locales: ['en'],
})

module.exports = withNextra({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Ensure these extensions are covered
})
