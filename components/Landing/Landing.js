import Image from 'next/image'

import Button from 'components/Button/button'

const Landing = () => {
  return(
    <div className="mt-40 flex gap-2 justify-center pb-4 flex-wrap">
      <div className="w-1/2 text-left">
        <Image 
          src="/bikeride.svg"
          layout="fixed"
          width={850}
          height={700}
        />
      </div>

      <div className="mt-24 w-1/4">
        <h2 className="font-semibold text-left">van der Binckes</h2>

        <h3 className="mt-4 text-left">
          Op maat gemaakte fietsen met wat stukjes qualiteit en innovatie
        </h3>

        <div className="mt-6 w-2/4">
          <Button
            title="Start je avontuur"
          />
        </div>

      </div>
    </div>
  )
}

export default Landing