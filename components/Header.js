import Link from 'next/link'

export default function Header() {
  return (
    <>

      <header>

        <div className="grid pt4 pb4">

          <div className="brand small-12 medium-12 large-6">
            <Link href="/">
              <a>Brand</a>
            </Link>
          </div>

          <nav
            className="small-12 medium-12 large-6"
            role="navigation"
            aria-label="main navigation">

            <Link href="/news">
              <a>News</a>
            </Link>

            <Link href="/about">
              <a>About</a>
            </Link>

            <Link href="/contact">
              <a>Contact</a>
            </Link>

          </nav>

        </div>

      </header>
    </>
  )
}
