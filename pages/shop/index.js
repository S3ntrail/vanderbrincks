import Header from "components/Global/Head/head";
import ShoppingCard from "components/Card/shop/card";

import { createClient } from "contentful";

export default function Home({ productList }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header title="Shopping page" />

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <section>
          <div className="mt-40 flex flex-wrap gap-2 justify-center pb-4">
            <div className="w-1/4 flex flex-row text-left animate__animated animate__fadeInLeft">
              <h2 className="font-semibold text-left">Filter</h2>
            </div>

            <div className="w-1/2 animate__animated animate__fadeInRight">
              <h2 className="font-semibold text-left">Bakfietsen</h2>

              <div className="mt-4 text-left flex flex-wrap w-full">
                {productList.map((product) => (
                  <ShoppingCard product={product.fields} key={product.sys.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async () => {
  const product = await client.getEntries({ content_type: 'storageBicycle' });
  return {
    props: {
      productList: product.items,
    },
  };
};
