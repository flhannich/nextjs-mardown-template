import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

const About = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody
  }) => {

  return (
    <>
    <Layout
      pageTitle={siteTitle}
      pageDescription={siteDescription}
      siteContacts={siteContacts}
    >

      <h1>{frontmatter.title}</h1>

      <ReactMarkdown source={markdownBody} />

      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {

  const content = await import(`../md/pages/about.md`)
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
