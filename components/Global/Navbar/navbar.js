import Link from 'next/link'

import Button from '/components/Button/button'

const Navbar = () => {
  return (

    <nav className="bg-white shadow" role="navigation">
      <div className="container mx-auto mt-4 p-4 flex flex-wrap items-center justify-center">
        
        <div className="mr-4 md:mr-8">
          <a href="#">
            <h1 className="font-bold">Van der Binckes</h1>
          </a>
        </div>

        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

          <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">

            <li>
              <Link href="#">
                <a className="block px-4 py-1 font-semibold" href="#" title="Link">Onderhoud</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a className="block px-4 py-1 font-semibold" href="#" title="Link">Over ons</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a className="block px-4 py-1 font-semibold" href="#" title="Link">Service</a>
              </Link>
            </li>

          </ul>

          <div className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <Button 
              title="Start je avontuur"
            >

            </Button>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar