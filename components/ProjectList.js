import Link from 'next/link'

const ProjectList = ({ projects }) => {

  if (projects === 'undefined') return null

  return (
    <div>
      {!projects && <div>No projects!</div>}
      <ul>
        {projects &&
          projects.map((project) => {
            return (

              <li key={project.slug}>

                {project.frontmatter.date}: {` `}

                <Link href={{ pathname: `/projects/${project.slug}` }}>

                  <a>{project.frontmatter.title}</a>

                </Link>

              </li>

            )
          })}
      </ul>
    </div>
  )
}

export default ProjectList
