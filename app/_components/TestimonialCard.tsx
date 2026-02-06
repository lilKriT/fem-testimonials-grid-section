import { Testimonial } from "../page";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  const t = testimonial;

  return (
    <div
      className={`${t.wide ? "col-span-6" : "col-span-3"} ${t.tall ? "row-span-2" : "row-span-1"} p-8 rounded-3xl shadow-[30px_30px_50px_0px_rgba(0,0,0,30%)] ${t.style}`}
    >
      <h2>{t.name}</h2>
      <p>{t.highlight}</p>
      <p>{t.quote}</p>
    </div>
  );
};

export default TestimonialCard;
