import ShopButton from "components/Button/shop/button";
import Link from "next/link";

const ShoppingCard = ({ product }) => {
  return (
    <Link href={"/shop/" + product.slug} key={product.id}>
      <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="border-2 border-black rounded-lg p-4 m-2">
          <div className="justify-center items-center mx-auto">
            <img
              className="rounded-t-lg"
              src="/cargo-bike.jpg"
              width="200"
              height="200"
            ></img>
          </div>

          <div className="border-t-2 border-black">
            <div className="mt-2">
              <h4>{product.productName}</h4>
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
    </Link>
  );
};

export default ShoppingCard;
