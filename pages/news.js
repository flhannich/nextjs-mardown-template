import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Image from '@components/Image'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import getPosts from '@utils/getPosts'

const Index = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody,
    news,
    newsList
  }) => {
    console.log(newsList);
  return (
    <>
    <Layout
      pageTitle={frontmatter.title}
      pageDescription={frontmatter.description}
      pageImage={frontmatter.image}
      pageType={frontmatter.type}
      siteContacts={siteContacts}
    >

      <header>
        <div class="grid">
          <div class="large-12">
            <ReactMarkdown
              source={markdownBody}
              renderers={{ image: Image }}
            />
          </div>
        </div>
        </header>

        <main>
          <div class="grid pt5 pb5">
            <div class="small-12 medium-12 large-12">
              <PostList posts={newsList} />
            </div>
          </div>
        </main>


      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {

  const content = await import(`../md/news.md`)
  const config = await import(`../siteconfig.json`)
  const data = matter(content.default)
  const newsList = ((context) => {
    return getPosts(context)
  })(require.context('../md/news', true, /\.md$/))

  return {
    props: {
      newsList,
      siteTitle: config.title,
      siteDescription: config.description,
      siteContacts: config.contact,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
