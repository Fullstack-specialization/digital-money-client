import LandingCard from "@/components/landing/LandingCard";
import { landingCards } from "@/constants/landingCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen pb-5 md:pb-10">
      <Image
        src="/img/bg-mobile.png"
        alt="mujer usando aplicación desde smarphone"
        width={390}
        height={780}
        className="absolute w-full h-full object-cover -z-30 md:hidden"
      />
      <Image
        src="/img/bg-tablet.png"
        alt="mujer usando aplicación desde smarphone"
        width={800}
        height={950}
        className="absolute w-full h-full object-cover -z-40 hidden md:block lg:hidden"
      />
      <Image
        src="/img/bg-digital-money.webp"
        alt="mujer usando aplicación desde smarphone"
        width={1440}
        height={732}
        className="absolute w-full h-full object-cover -z-50 hidden lg:block"
      />
      <section className="w-auto mt-[80px] md:mt-[140px] lg:mt-[120px] ml-[20px] md:ml-[50px]">
        <h1 className="text-white text-[27px] md:text-4xl w-[190px] md:w-[418px] font-semibold md:font-normal text">
          De ahora en adelante, hacés más con tu dinero
        </h1>
        <div className="mt-3 md:hidden">
          <Image
            src="/img/Vector 12.svg"
            alt="Decorative line"
            width={50}
            height={4}
            className="h-[4px] w-[50px] -ml-3"
          />
        </div>
        <p className="text-primary text-[21.5px] md:text-[34px] mt-2 leading-tight">
          Tu nueva
          <br className="block md:hidden" />
          <span className="font-semibold"> billetera virtual</span>
        </p>
      </section>

      {/* Sección de Cards */}
      <section className="relative z-20 flex flex-col gap-5 self-center lg:flex-row mt-20">
        {landingCards.map((card, index) => (
          <LandingCard key={index} {...card} />
        ))}
      </section>

      <div className="absolute bottom-0 left-0 w-full h-[329px] md:[434px] lg:h-[148px] rounded-t-2xl bg-primary z-10 md:h-1/3 xl:h-1/4"></div>
    </div>
  );
}
