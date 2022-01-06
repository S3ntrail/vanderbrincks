import ShopButton from "components/Button/shop/button";
import Image from "next/image"
import Link from "next/link";

const ShoppingCard = ({ product }) => {

  const { slug, productName, price, image} = product

  return (
    <Link href={"/shop/" + slug}>
      <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="border-2 border-black rounded-lg p-4 m-2">
          <div className="justify-center items-center mx-auto">
            <Image 
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
            />
          </div>

          <div className="border-t-2 border-black">
            <div className="mt-2">
              <h4>{productName}</h4>
            </div>
          </div>

          <div>
            <p>€ {price}</p>
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
