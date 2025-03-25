interface LandingCardProps {
    title: string;
    description: string;
  }
  
  export default function LandingCard({ title, description }: LandingCardProps) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md text-black md:p-8 w-[354px] md:w-[600px] lg:w-[500px] flex flex-col gap-4">
        <h3 className="font-bold border-b-2 border-primary pb-2 text-xl md:text-3xl">
          {title}
        </h3>
        <p className="text-black text-base md:text-lg w-[318px] md:w-[534px] lg:w-[417px]">{description}</p>
      </div>
    );
  }
  