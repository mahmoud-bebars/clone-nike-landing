import { star } from "../../assets/icons";

const Review = ({ review }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={review.imgURL}
        alt="customer"
        width={120}
        height={120}
        className=" object-cover rounded-full"
      />
      <p className=" mt-6 max-w-sm  text-center info-text">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className=" object-contain m-0"
        />
        <p className=" font-montserrat text-xl text-slate-gray">
          ({review.rating})
        </p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-bold font-palanquin">
        {review.customerName}
      </h3>
    </div>
  );
};

export default Review;
