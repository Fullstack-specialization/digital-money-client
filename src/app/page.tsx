import LandingCard from "@/components/landing/LandingCard";
import { landingCards } from "@/constants/landingCards";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between bg-landing-image bg-cover bg-center bg-no-repeat p-5 md:pl-20 md:pt-10">
      
      {/* Sección de Títulos */}
      <section className="w-full md:w-1/2 xl:max-w-[418px]">
        <h1 className="text-white text-4xl leading-tight">
          De ahora en adelante, hacés más con tu dinero
        </h1>
        <p className="text-primary text-[34px] mt-2">
          Tu nueva <span className="text-primary font-semibold">billetera virtual</span>
        </p>
      </section>

      {/* Sección de Cards */}
      <section className="relative z-20 flex flex-col gap-5 self-center xl:flex-row mt-20">
        {landingCards.map((card, index) => (
          <LandingCard key={index} {...card} />
        ))}
      </section>

      <div className="absolute bottom-0 left-0 w-full max-h-[148px] h-2/5 rounded-t-2xl bg-primary z-10 md:h-1/3 xl:h-1/4"></div>
    </div>
  );
}
