import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { DefaultLayout } from '../layouts/'
import { ProjectList, Image } from '../components/'

import getPosts from '../utils/getPosts'

const Index = ({
    siteTitle,
    siteDescription,
    siteContacts,
    frontmatter,
    markdownBody,
    projects
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

        <main>
          <ProjectList projects={projects} />
        </main>

        <article>
          <ReactMarkdown
            allowDangerousHtml={true}
            source={markdownBody}
            renderers={{ image: Image }}
          />
        </article>

      </div>

      </DefaultLayout>
    </>
  )
}

export default Index

export async function getStaticProps() {

  const content = await import(`../md/home.md`)
  const config = await import(`../siteconfig.json`)
  const data = matter(content.default)

  const projects = ((context) => {
    return getPosts(context)
  })(require.context('../md/projects', true, /\.md$/))

  return {
    props: {
      projects,
      siteTitle: config.title,
      siteDescription: config.description,
      siteContacts: config.contact,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
