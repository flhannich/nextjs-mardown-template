import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

export default function PostList({ posts, limit }) {
  let int;
  let add = 1;

  (limit !== undefined)
  ? int = parseInt(limit)
  : int = Infinity

  const [max, setMax] = useState(int);

  const postList = posts.slice(0, max);

  return (
    <div>

      {!posts &&
        <div>
          Sorry, there are no posts!
        </div>
      }

        {posts &&

          <ul>

            { postList.map((post) => {
              return (

                <li key={post.slug}>

                  {post.frontmatter.date}: {` `}

                  <Link href={{ pathname: `/news/${post.slug}` }}>

                    <a>{post.frontmatter.title}</a>

                  </Link>

                </li>

              )
            }) }

          </ul>

        }

        {limit && max < posts.length &&

          <button onClick={() => setMax(max + add)}>Show More</button>

        }

    </div>
  )
}
