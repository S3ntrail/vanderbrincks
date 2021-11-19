import Header from '../components/Global/Head/head'
import Navbar from '../components/Global/Navbar/navbar'

import Shop from '../components/Shop/Shopping'

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center">
      <Header />

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <div>
          <Navbar />
        </div>

        <section>
          <Shop />
        </section>

      </main>

    </div>
  )
}