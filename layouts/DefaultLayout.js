import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Footer, AccessibilityButton } from '../components'

import { pageTransition, scrollTrigger, lazyLoad } from '../utils/helpers'

const DefaultLayout = ({
    children,
    siteContacts,
    pageTitle,
    pageDescription,
    pageImage,
    pageType,
    ...props }) => {
    
      
    useEffect(() => {
      lazyLoad()
      pageTransition()
      scrollTrigger('[data-scroll]')
    }, []);

  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="Description" content={pageDescription}></meta>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content={pageType} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="de-DE" />

      </Head>
      
      <AccessibilityButton 
        anchor={'mainContent'}
      />
      
      <Header />

      <main id="mainContent">{children}</main>

      <Footer siteContacts = {siteContacts} />

    </>
  )
}

export default DefaultLayout;