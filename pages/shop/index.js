import Header from "components/Global/Head/head";
import ShoppingCard from "components/Card/shop/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <section>
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
        </section>
      </main>
    </div>
  );
}
