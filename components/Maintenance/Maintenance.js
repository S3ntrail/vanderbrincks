import Image from 'next/image'

import Card from 'components/Card/card'

const Maintenance = () => {
  return(
    <div className="flex gap-2 justify-center pb-4 flex-wrap">

      <div className="mt-24 w-1/4">
        <h2 className="font-semibold text-left">Onderhoud</h2>

        <h3 className="mt-4 text-left">
          Overal en altijd beschikbaar
          Zowel digitaal als bij je thuis
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
  )
}

export default Maintenance