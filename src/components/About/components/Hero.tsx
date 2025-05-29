import { Header } from "../../Home/components/Header";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('src/assets/aboutHero.jpg')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] pt-[30%] flex flex-col items-center mobile:text-5xl">
          <h1 className="text-center">Designed by nature,</h1>
          <h1>Sumptuously.</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
