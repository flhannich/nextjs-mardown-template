import Link from 'next/link'

export default function Header() {
  return (
    <>

      <header className="header">

        <nav className="nav" role="navigation" aria-label="main navigation">

          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

        </nav>

      </header>
    </>
  )
}
