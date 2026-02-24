import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url, type = 'website' }) {
    const siteTitle = 'ESCP Students for Finance – Turin Campus';
    const fullTitle = title ? `${title} | ESCP Students for Finance` : siteTitle;
    const siteUrl = 'https://escpfinance.com'; // Adjust or pull from env
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}/logo.png`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
}
