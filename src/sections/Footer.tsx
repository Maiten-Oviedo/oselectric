import { navLinks } from '../constants/navLinks'

const Footer = () => {
  return (
    <footer className="my-16  px-4 md:px-24">
      <article className="border-t-5 border-primary pt-16 flex justify-between">
        <i className="flex flex-col items-center">
          <img className="rounded-2xl size-20" src="/assets/images/logo.jpeg" />
          <p className="text-xl">Servicios Eléctricos</p>
        </i>
        <div className="flex gap-10">
          <nav>
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <li key={`footer-navLinks-${index}`}>
                  <a
                    href={link.href}
                    className="border-b-2 border-transparent hover:text-secundary hover:border-b-secundary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <li key={`footer-navLinks-${index}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </footer>
  )
}

export default Footer
