import React, { useState, useRef, useEffect } from "react";
import TextRandomize from "../components/TextRandomize";
import VanillaTilt from "vanilla-tilt";
import GlitchGif from "../assets/glitch.gif";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Hero = () => {
  const options = {
    speed: 100,
    max: 10,
    reverse: true,
  };

  return (
    <div className="container">
      <div className="relative z-10 py-32">
        <div className="flex flex-col justify-center font-black text-gray-200 text-9xl items-center font-paytone tracking-[-0.05em] leading-[6rem] text-center">
          <div className="relative">
            <Tilt options={options}>
              <div className="reltaive h-[500px] w-[600px]">
                <img
                  src={GlitchGif}
                  alt=""
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute bg-black h-full w-full top-0 left-0 z-20 rounded-xl bg-opacity-70 "></div>
            </Tilt>

            <div className="absolute top-0 -left-10 z-30 lowercase">
              <h1>let's create</h1>
              <h1>something </h1>
              <h1>amazing</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
