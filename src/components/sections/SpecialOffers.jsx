import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import { Button } from "../shared";

const SpecialOffers = () => {
  return (
    <section className="flex justify-warp items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer-image"
          width={773}
          height={687}
          className=" object-contain w-full "
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            Offer
          </span>
        </h2>
        <p className=" mt-4 lg:ma-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className=" mt-6 lg:ma-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex items-center gap-2 mt-11">
          <Button title="Shop Now" icon={arrowRight} />
          <Button
            title="Learn More"
            variant="bg-white"
            text="text-slate-gray"
            border="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
