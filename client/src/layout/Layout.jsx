import React from "react";
import Header from "./Header";
import WelcomeBox from "../components/WelcomeBox";
import SportBox from "../components/SportBox";
import BetShowBox from "../components/BetShowBox";

const Layout = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex h-screen flex-col">
        <div>
          <Header />
        </div>
        <div className="flex overflow-hidden">
          <div className="w-72 flex-none overflow-y-scroll">
            <div className="p-5">
              <p>Popular</p>
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
            </div>
            <div className="p-5">
              <p>Sports</p>
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
            </div>

            <div className="p-5">
              <p>Lattury</p>
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
              <SportBox />
            </div>
          </div>
          <div className="grow overflow-y-scroll px-5">
            {/* <WelcomeBox/> */}
           <BetShowBox/>
           <BetShowBox/>
           <BetShowBox/>
           <BetShowBox/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
