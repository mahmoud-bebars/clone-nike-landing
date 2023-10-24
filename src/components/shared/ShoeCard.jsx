const ShoeCard = ({ img, chnageBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (chnageBigShoeImage !== img.bigShoe) {
      chnageBigShoeImage(img.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={` border-2 rounded-xl cursor-pointer max-sm max-sm:flex-1 ${
        bigShoeImg === img.bigShoe ? "border-coral-red" : "border-transparent"
      } `}
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 ">
        <img
          src={img.thumbnail}
          alt="shoe card"
          className=" object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
