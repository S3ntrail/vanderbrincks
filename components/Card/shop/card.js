import data from 'data/data.json'
import ShopButton from 'components/Button/shop/button'

const ShoppingCard = () => {

  const product = data.map((product, index) => {
    return(
      <div key={index}>
        <div className="border-2 border-gray-400 rounded-lg p-4 m-2">

          <div className="justify-center items-center mx-auto">
            <img className="rounded-t-lg" src="/cargo-bike.jpg" width="200" height="200"></img>
          </div>

          <div className="border-t-2 border-gray-400">
            <div className="mt-2">
              <h4>{product.name}</h4>
            </div>
          </div>

          <div>
            <p>€ {product.price}</p>
          </div>

          <div className="mt-4">
            <ShopButton />
          </div>

        </div>
      </div>
    )
  })

  return <>{product}</>
}

export default ShoppingCard