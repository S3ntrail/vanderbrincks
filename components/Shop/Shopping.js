import ShoppingCard from 'components/Card/shop/card'

const Shop = () => {
  return(
    <div className="mt-40 flex flex-wrap gap-2 justify-center pb-4">
      <div className="w-1/4 flex flex-row text-left animate__animated animate__fadeInLeft">
        <h2 className="font-semibold text-left">Filter</h2>
      </div>

      <div className="w-1/2 animate__animated animate__fadeInRight">
        <h2 className="font-semibold text-left">Bakfietsen</h2>

        <div className="mt-4 text-left flex flex-wrap w-full">
          <ShoppingCard />
        </div>

      </div>
    </div>
  )
}

export default Shop