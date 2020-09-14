import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, siteContacts, pageTitle, pageDescription, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={pageDescription}></meta>
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer
        siteContacts = {siteContacts}
      />

    </>
  )
}
