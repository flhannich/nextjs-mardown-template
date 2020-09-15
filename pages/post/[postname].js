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

          <div className="container">

            {frontmatter.hero_image && (
              <img
                src={frontmatter.hero_image}
                className="hero"
                alt={frontmatter.title}
              />
            )}

            <ReactMarkdown
              source={markdownBody}
              renderers={{ image: Image }}
            />

          </div>

        </article>

      </Layout>

    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../md/posts/${postname}.md`)
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
  })(require.context('../../md/posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
