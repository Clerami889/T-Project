/* eslint-disable react/no-unescaped-entities */
import { PiSunHorizonDuotone } from "react-icons/pi";
const First = () => {
  return (
    <div className="w-[100dvw] h-[400px] bg-gradient-to-tr from-[#E5B89C] to-[#9FAFB6] p-[0px] gap-[5px] md:h-[800px] xl:h-[100svh] m-0">
      <div className="w-[90svw] h-[360px] ">
        <div className="flex justify-between font-firstatas text-white ">
          <p>
            <PiSunHorizonDuotone size="1.6em" />
          </p>
          <p>Home</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>

        <div className="relative top-[60%] left-[8%] text-[32px] font-firstbawah text-white md:text-[64px] md:top-[130%] md:left-[5%] xl:text-[80px] xl:top-[150%]">
          <h1>
            Unleash the Creative
            <br /> Wonder of Thea's World.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default First;
