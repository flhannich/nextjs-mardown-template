import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

import Layout from '@components/Layout'
import Image from '@components/Image'
import getSlugs from '@utils/getSlugs'

const Contact = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody
  }) => {

  return (
    <>
      <Layout
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.description}
        pageImage={frontmatter.image}
        pageType={frontmatter.type}
        siteContacts={siteContacts}
      >

        <div className="container">

          <article>
            <ReactMarkdown
              source={markdownBody}
              renderers={{ image: Image }}
            />
          </article>

          <address>
            <span>{siteContacts.name}</span><br />
            <span>{siteContacts.street}</span><br />
            <span>{siteContacts.postal}</span><br />
            <span>{siteContacts.city}</span><br />
            <a href={`tel:${siteContacts.phone}`}>{siteContacts.phone}</a><br />
            <a href={`mailto:${siteContacts.mail}`}>{siteContacts.mail}</a>
          </address>

        </div>

      </Layout>
    </>
  )
}

export default Contact

export async function getStaticProps() {

  const content = await import(`../md/contact.md`)
  const config = await import(`../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      siteDescription: config.description,
      siteContacts: config.contact,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
