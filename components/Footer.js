import Link from 'next/link'


export default function Footer({siteContacts}) {

  return (
    <>
      <footer className="footer">

        <h2>Footer hook</h2>
        <p>Footer hook content</p>

        <Link href="/contact">
          <a>Write us</a>
        </Link>

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

        <adress>
          <span>{siteContacts.name}</span><br />
          <span>{siteContacts.street}</span><br />
          <span>{siteContacts.postal}</span><br />
          <span>{siteContacts.city}</span><br />
          <a href={`tel:${siteContacts.phone}`}>{siteContacts.phone}</a><br />
          <a href={`mailto:${siteContacts.mail}`}>{siteContacts.mail}</a>
        </adress>


      </footer>

    </>
  )

}
