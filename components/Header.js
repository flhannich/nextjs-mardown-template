import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <>

      <header className={styles.container}>

        <div className="container">

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

        </div>
        
      </header>
    </>
  )
}
