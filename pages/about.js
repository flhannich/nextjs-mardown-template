import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

import { DefaultLayout } from '../layouts'
import { Image } from '../components'
import getSlugs from '../utils/getSlugs'

const About = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody
  }) => {

  return (
    <>
      <DefaultLayout
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

        </div>

      </DefaultLayout>
    </>
  )
}

export default About

export async function getStaticProps() {

  const content = await import(`../md/about.md`)
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
