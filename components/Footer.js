import Link from 'next/link'


export default function Footer({siteContacts}) {

  return (
    <>
      <footer>

        <div className="grid pt7">

          <div className="brand small-12 medium-12 large-5">
            <Link href="/">
              <a>Brand</a>
            </Link>
          </div>

          <nav className="small-12 medium-12 large-4 pb5" role="navigation" aria-label="main navigation">

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

          <address className="small-12 medium-12 large-3">
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
