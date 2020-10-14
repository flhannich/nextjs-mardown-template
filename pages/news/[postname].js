import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Image from '@components/Image'
import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

export default function BlogPost ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody
  }) {

  if (!frontmatter) return <></>

  return (
    <>
      <Layout
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.description}
        pageImage={frontmatter.image}
        pageType={frontmatter.type}
        siteContacts={siteContacts}
      >

        <article>

          <div className="grid">

            <header className="small-12 medium-8 large-12 pb5">
              <h1>{frontmatter.title}</h1>
            </header>

            {frontmatter.hero_image && (
              <img
                src={frontmatter.hero_image}
                className="hero"
                alt={frontmatter.title}
              />
            )}

            <article className="small-12 medium-8 large-6">
              <ReactMarkdown
                source={markdownBody}
                renderers={{ image: Image }}
              />
            </article>

          </div>

        </article>

      </Layout>

    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../md/news/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
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

export async function getStaticPaths() {

  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../md/news', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/news/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
