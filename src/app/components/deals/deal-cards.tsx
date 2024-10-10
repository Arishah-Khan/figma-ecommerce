import { Quicksand } from "next/font/google";
import DealCard from "./card";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "700", // Medium for card titles
});

export default function DealCardsProduct() {
  return (
    <>
      <h2 className={`${quicksand.className} font-bold text-2xl mb-6 px-6 py-2 mt-8`}>
        Deals Of The Day
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center relative mb-10 py-4">
        {/* First Deal Card */}
        <div className="relative w-[280px] sm:w-[260px] h-[300px] sm:h-[320px] grid place-items-center">
          <Image src="/images/deal1.png" alt="deal1" width={300} height={200} className="absolute top-0" />
          <div className="absolute top-[65%] translate-y-[-30%] w-[80%] sm:w-[90%]">
            <DealCard
              heading="Seeds of Change Organic Quinoa, Brown, & Red Rice"
              price="32.85"
              rating="4.0"
              name="NestFood"
            />
          </div>
        </div>

        {/* Second Deal Card */}
        <div className="relative w-[280px] sm:w-[260px] h-[300px] sm:h-[320px] grid place-items-center">
          <Image src="/images/deal2.png" alt="deal2" width={300} height={200} className="absolute top-0" />
          <div className="absolute top-[65%] translate-y-[-30%] w-[90%]">
            <DealCard
              heading="Perdue Simply Smart Organics Gluten Free"
              price="28.85"
              rating="4.0"
              name="Old El Paso"
            />
          </div>
        </div>

        {/* Third Deal Card */}
        <div className="relative w-[280px] sm:w-[260px] h-[300px] sm:h-[320px] grid place-items-center">
          <Image src="/images/deal3.png" alt="deal3" width={300} height={200} className="absolute top-0" />
          <div className="absolute top-[65%] translate-y-[-30%] w-[90%]">
            <DealCard
              heading="Signature Wood-Fired Mushroom"
              price="12.85"
              rating="3.0"
              name="Progresso"
            />
          </div>
        </div>

        {/* Fourth Deal Card */}


        <div className="relative w-[280px] sm:w-[260px] h-[300px] sm:h-[320px] grid place-items-center">
          <Image src="/images/deal4.png" alt="deal4" width={300} height={200} className="absolute top-0" />
          <div className="absolute top-[65%] translate-y-[-30%] w-[90%]">
            <DealCard
              heading="Simply Lemonade with Raspberry Juice"
              price="15.85"
              rating="3.0"
              name="Yoplait"
            />
          </div>
        </div>


       
      </div>
    </>
  );
}
