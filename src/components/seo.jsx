import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { withPrefix } from "gatsby";

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, instagramUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    instagramUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="instagram:card" content="summary_large_image" />
      <meta name="instagram:title" content={seo.title} />
      <meta name="instagram:url" content={seo.url} />
      <meta name="instagram:description" content={seo.description} />
      <meta name="instagram:image" content={seo.image} />
      <meta name="instagram:creator" content={seo.instagramUsername} />
      <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
      {children}
    </>
  )
}