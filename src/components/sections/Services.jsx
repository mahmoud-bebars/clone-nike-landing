import { services } from "../../constants";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
};

export default Services;
