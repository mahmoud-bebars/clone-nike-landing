import { reviews } from "../../constants";
import { Review } from "../shared";

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="flex flex-col justify-center items-center max-container max-sm:mt-12"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h2 className="text-4xl font-palanquin font-bold ">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className=" info-text m-auto mt-4 nax-w-lg text-center ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 items-center justify-evenly max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
