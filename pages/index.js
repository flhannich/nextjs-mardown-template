import Layout from '@components/Layout'
import PostList from '@components/PostList'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import getPosts from '@utils/getPosts'

const Index = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody,
    posts
  }) => {

  return (
    <>
    <Layout
      pageTitle={siteTitle}
      pageDescription={siteDescription}
      siteContacts={siteContacts}
    >

    <div className="container">

      <h1>{frontmatter.title}</h1>

        <main>
          <PostList posts={posts} />
        </main>

        <ReactMarkdown source={markdownBody} />

      </div>

      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {

  const content = await import(`../md/pages/index.md`)
  const config = await import(`../siteconfig.json`)
  const data = matter(content.default)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../md/posts', true, /\.md$/))

  return {
    props: {
      posts,
      siteTitle: config.title,
      siteDescription: config.description,
      siteContacts: config.contact,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
