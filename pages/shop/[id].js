import Header from "components/Global/Head/head";
import ShopButton from "components/Button/shop/button";
import Rating from "components/Rating/Rating";

import data from "data/data.json";

export const getStaticPaths = async () => {
  const res = data;

  const paths = res.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = data.find((x) => x.id == id);

  return {
    props: { product: res },
  };
};

const Details = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header title={product.brand + " - " + product.name} />

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
              <h2 className="font-semibold">{product.name}</h2>

              <div className="mt-4 text-left flex flex-wrap w-full">
                <Rating rating={product.rating} />
              </div>

              <p className="font-light mt-2">{product.brand}</p>
              <p className="font-light">
                {product.durability} uur lang fietsen (op een volle batterij)
              </p>

              <div className="mt-6 text-left flex flex-wrap w-full">
                <h3>{product.price}</h3>
              </div>

              <div className="mt-4 text-left flex flex-wrap w-full">
                <div className="w-full">
                  <ShopButton />
                </div>
              </div>
            </div>

            <div className="w-full mt-20">
              <h2 className="font-semibold">Omschrijving</h2>
              <p className="mt-4 m-20 lg:mx-40">{product.description}</p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
