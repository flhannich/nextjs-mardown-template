
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { DefaultLayout } from '../layouts/'
import { PostList, Image } from '../components/'

import getPosts from '../utils/getPosts'

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
    <DefaultLayout
      pageTitle={frontmatter.title}
      pageDescription={frontmatter.description}
      pageImage={frontmatter.image}
      pageType={frontmatter.type}
      siteContacts={siteContacts}
    >

      <div className="container">

        <header>
          <ReactMarkdown
            allowDangerousHtml={true}
            source={markdownBody}
            renderers={{ image: Image }}
          />
        </header>

        <article>
          <PostList posts={posts} />
        </article>
        
      </div>

      </DefaultLayout>
    </>
  )
}

export default Index

export async function getStaticProps() {

  const content = await import(`../md/blog.md`)
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
