import Link from 'next/link'


const Footer = ({siteContacts}) => {

  return (
    <>
      <footer className="">

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
            
            <Link href="/legals/impress">
              <a>Impress</a>
            </Link>
            
            <Link href="/legals/privacy">
              <a>Privacy</a>
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

export default Footer;