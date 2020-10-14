import PostList from '@components/PostList'
import Layout from '@components/Layout'
import Image from '@components/Image'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import getPosts from '@utils/getPosts'

const Index = ({
    siteContacts,
    home,
    about,
    newsList
  }) => {
    console.log(about);
  return (
    <>
    <Layout
      pageTitle={home.frontmatter.title}
      pageDescription={home.frontmatter.description}
      pageImage={home.frontmatter.image}
      pageType={home.frontmatter.type}
      siteContacts={siteContacts}
    >

    <main className="home">

      <header>

        <div className="grid pb7 pt6">

          <div className="large-12">
            <ReactMarkdown
              source={home.markdownBody}
              renderers={{ image: Image }}
            />
          </div>

        </div>

      </header>


      <section>

        <div className="grid pb6 pt6">

          <div className="large-12">
            <h2>{about.frontmatter.title}</h2>
            {about.frontmatter.description}
          </div>

        </div>

      </section>

      <section>

        <div className="grid">

          <div className="large-12">
            <PostList
              posts={newsList}
              limit='2'
            />
          </div>

        </div>

      </section>


    </main>

      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {

  const home = await import(`../md/home.md`)
  const about = await import(`../md/sections/about.md`)
  const config = await import(`../siteconfig.json`)
  const dataHome = matter(home.default)
  const dataAbout = matter(about.default)

  const newsList = ((context) => {
    return getPosts(context)
  })(require.context('../md/news', true, /\.md$/))

  return {
    props: {
      newsList,
      siteContacts: config.contact,
      home: {
        frontmatter: dataHome.data,
        markdownBody: dataHome.content,
      },
      about: {
        frontmatter: dataAbout.data,
        markdownBody: dataAbout.content,
      }
    },
  }
}
