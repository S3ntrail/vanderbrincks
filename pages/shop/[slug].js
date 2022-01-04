import Header from "components/Global/Head/head";
import ShopButton from "components/Button/shop/button";
import Rating from "components/Rating/Rating";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'storageBicycle'
  })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: 'storageBicycle',
    'fields.slug': params.slug
  })

  return {
    props: {
      bicycle: res.items[0]
    }
  }
}

const Details = ({ bicycle }) => {

  const {brand, productName, price, rating, batteryDuration, description} = bicycle.fields

  return (
    <div className="flex flex-col items-center justify-center">
      <Header title={brand + " - " + productName} />

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <section>
          <div className="mt-40 flex flex-wrap gap-2 justify-center pb-4">
            <div className="w-1/3 flex flex-row text-left animate__animated animate__fadeInLeft">
              <div className="justify-center items-center mx-auto">
                <img
                  className="rounded-t-lg"
                  src="/cargo-bike.jpg"
                  width="600"
                  height="600"
                ></img>
              </div>
            </div>

            <div className="w-1/4 text-left animate__animated animate__fadeInRight">
              <h2 className="font-semibold">{productName}</h2>

              <div className="mt-4 text-left flex flex-wrap w-full">
                <Rating rating={rating} />
              </div>

              <p className="font-light mt-2">{brand}</p>
              <p className="font-light">
                {batteryDuration} uur lang fietsen (op een volle batterij)
              </p>

              <div className="mt-6 text-left flex flex-wrap w-full">
                <h3>{price}</h3>
              </div>

              <div className="mt-4 text-left flex flex-wrap w-full">
                <div className="w-full">
                  <ShopButton />
                </div>
              </div>
            </div>

            <div className="w-full mt-20">
              <h2 className="font-semibold">Omschrijving</h2>
              <div className="mt-4 m-20 lg:mx-40">{documentToReactComponents(description)}</div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
