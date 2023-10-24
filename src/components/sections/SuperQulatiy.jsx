import { shoe8 } from "../../assets/images";
import { Button } from "../shared";

const SuperQulatiy = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            We Provide You
          </span>
          <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className=" mt-4 lg:ma-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className=" mt-6 lg:ma-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button title="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoes image"
          width={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQulatiy;
