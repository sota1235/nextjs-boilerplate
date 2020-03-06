import * as React from 'react';
import NextHead from 'next/head';

interface Props {
  title: string;
  description?: string;
  noindex: boolean;
}

const DEFAULT_DESCRIPTION = 'My awesome web application!';

const Head: React.FC<Props> = ({ title, description, noindex }) => (
  <NextHead>
    <title>{title} | My App Name</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    {noindex && <meta name="robots" content="noindex" />}
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={description || DEFAULT_DESCRIPTION}
    />
    <meta property="og:type" content="blog" />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
  </NextHead>
);

export { Head };
