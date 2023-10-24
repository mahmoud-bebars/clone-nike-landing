import { star } from "../../assets/icons";
const PopularProduct = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={product.imgURL}
        alt="product image"
        className=" w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="" />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">
          ({product.rate})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProduct;
