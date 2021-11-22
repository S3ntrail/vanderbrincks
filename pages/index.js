import Link from "next/link";
import Image from "next/image";

import Button from "components/Button/button";
import Header from "components/Global/Head/head";
import Card from 'components/Card/card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header 
        title="Home page"
      />

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <section>
          <div className="mt-40 flex gap-2 justify-center pb-4 flex-wrap">
            <div className="w-1/2 text-left animate__animated animate__fadeInLeft">
              <Image
                src="/bikeride.svg"
                layout="fixed"
                width={850}
                height={700}
              />
            </div>

            <div className="mt-24 w-1/4 animate__animated animate__fadeInRight">
              <h2 className="font-semibold text-left">Van der Binckes</h2>

              <h3 className="mt-4 text-left">
                Op maat gemaakte fietsen met wat stukjes qualiteit en innovatie
              </h3>

              <div className="text-left mt-6 w-2/4">
                <Link href="/shop">
                  <a title="Shop">
                    <Button title="Start je avontuur" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex gap-2 justify-center pb-4 flex-wrap">
            <div className="mt-24 w-1/4">
              <h2 className="font-semibold text-left">Onderhoud</h2>

              <h3 className="mt-4 text-left">
                Overal en altijd beschikbaar Zowel digitaal als bij je thuis
              </h3>

              <div className="mt-6">
                <Card
                  title="Onderhoud"
                  description="Lees hier over het onderhouden van je fiets"
                />
              </div>

              <div className="mt-6">
                <Card
                  title="Veiligheid"
                  description="Lees hier over het veiligheid over jou en het verkeerd"
                />
              </div>
            </div>

            <div className="w-1/2">
              <Image
                src="/engineer.svg"
                layout="fixed"
                width={700}
                height={850}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
