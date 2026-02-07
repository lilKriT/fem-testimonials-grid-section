import Image from "next/image";
import { Testimonial } from "../page";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  const t = testimonial;

  return (
    <div
      className={`${t.wide ? "col-span-6" : "col-span-3"} ${t.tall ? "row-span-2" : "row-span-1"} flex flex-col gap-4 p-8 rounded-3xl shadow-[30px_30px_50px_0px_rgba(0,0,0,30%)] ${t.style}`}
    >
      <div className="flex items-center gap-4">
        {t.picture && (
          <Image
            src={`/${t.picture}`}
            alt={`Picture of ${t.name}`}
            width={56}
            height={56}
            className="rounded-full w-10 aspect-square"
          />
        )}
        <div className="flex flex-col items-start">
          <h2 className="font-semibold">{t.name}</h2>
          <p>{t.verified}</p>
        </div>
      </div>
      <p className="text-xl font-semibold leading-7">{t.highlight}</p>
      <p>{t.quote}</p>
    </div>
  );
};

export default TestimonialCard;
