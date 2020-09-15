import Link from 'next/link'
import styles from './Footer.module.scss'


export default function Footer({siteContacts}) {

  return (
    <>
      <footer className={styles.container}>

        <div className="container">

          <div className={styles.hook}>

            <h3>Waistcoat keffiyeh activated charcoal leggings YOLO tofu messenger bag 8-bit</h3>
            <p>Footer hook content</p>

            <Link href="/contact">
              <a>Write us</a>
            </Link>

          </div>

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

          <address>
            <span>{siteContacts.name}</span><br />
            <span>{siteContacts.street}</span><br />
            <span>{siteContacts.postal}</span><br />
            <span>{siteContacts.city}</span><br />
            <a href={`tel:${siteContacts.phone}`}>{siteContacts.phone}</a><br />
            <a href={`mailto:${siteContacts.mail}`}>{siteContacts.mail}</a>
          </address>

        </div>

      </footer>

    </>
  )

}
