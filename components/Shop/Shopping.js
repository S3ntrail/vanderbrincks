import Image from 'next/image'

import Button from 'components/Button/button'

const Shop = () => {
  return(
    <div className="mt-40 flex gap-2 justify-center pb-4 flex-wrap">
      <div className="w-1/2 text-left animate__animated animate__fadeInLeft">
        
      </div>

      <div className="mt-24 w-1/4 animate__animated animate__fadeInRight">
        <h2 className="font-semibold text-left">UWU</h2>

        <h3 className="mt-4 text-left">
          Op maat gemaakte fietsen met wat stukjes qualiteit en innovatie
        </h3>

      </div>
    </div>
  )
}

export default Shop