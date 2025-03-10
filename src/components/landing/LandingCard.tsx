interface LandingCardProps {
    title: string;
    description: string;
  }
  
  export default function LandingCard({ title, description }: LandingCardProps) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md text-black md:p-8 xl:w-[500px] flex flex-col gap-4">
        <h3 className="text-xl font-bold border-b-2 border-primary pb-2 xl:text-2xl md:text-lg">
          {title}
        </h3>
        <p className="text-black text-sm xl:text-lg md:text-base w-[417px]">{description}</p>
      </div>
    );
  }
  