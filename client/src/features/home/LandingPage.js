import React from "react";
import "../../index.css";
import LongCard from "./LongCard";
import NavBtn from "./NavBtn";
import SmallCard from "./SmallCard";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return(
    <div className="flex flex-wrap ">
      <NavBtn Icon={FaArrowRight} />
      <div className="flex flex-col content-center md:flex-row text-center gap-8 ">
        <SmallCard
          title={"together"}
          img1={"../../togetherFavicon.ico"}
          img2={"../../threeHumans.png"}
        />
        <SmallCard img3={"../../hooman.png"} title={"Welcome!"} />
      </div>

      <div className=" min-w-[15.25rem] ">
        <LongCard />
      </div>
    </div>
  );
};

export default LandingPage;
