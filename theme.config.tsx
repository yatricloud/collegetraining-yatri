import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <>
      <img 
        src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png" 
        alt="College Training - Yatri Cloud" 
        style={{ height: '24px', marginRight: '0.4em' }} 
      />
      <span style={{ fontWeight: 500 }}>College Training - Yatri Cloud</span> {/* Use fontWeight 500 for medium bold */}
    </>
  ),
  // project: {
  //   link: 'https://github.com/yatricloud',
  // },
  docsRepositoryBase: 'https://github.com/yatricloud/collegetraining-yatri/blob/main',
  footer: {
    text: '©2025 Yatri Cloud. All Rights Reserved.',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Yatri Cloud',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="College Training - Yatri Cloud" />
      <meta property="og:description" content="Journey Towards Cloud & DevOps" />
      <meta property="og:image" content="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png" /> {/* Social sharing icon */}
      <meta property="og:image:width" content="1200" /> {/* Standard size for sharing images */}
      <meta property="og:image:height" content="630" /> {/* Standard size for sharing images */}
      
      {/* Favicon */}
      <link rel="icon" href="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png" type="image/png" />
      <title>College Training - Yatri Cloud</title>
    </>
  )
};

export default config;
