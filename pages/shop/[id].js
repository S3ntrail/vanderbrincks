import Header from '../../components/Global/Head/head'
import data from 'data/data.json'

export const getStaticPaths = async () => {
  const res = data

  const paths = res.map(product => {
    return {
      params : { id: product.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = data.find(x => x.id == id)

  return {
    props : { product: res}
  }

}

const Details = ({ product }) => {

  return (

    <div className="flex flex-col items-center justify-center">
      <Header />

      <main className="flex flex-col justify-center w-full flex-1 text-center">

        <section>
          <h1>{product.id}</h1>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <h1>{product.durability}</h1>
          <h1>{product.brand}</h1>
        </section>

      </main>

    </div>
  )
}

export default Details