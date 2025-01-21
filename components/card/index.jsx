"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo({
  img,
  name,
  description,
  onClick,
  projectUrl,
}) {
  return (
    <div
      className=" h-[350px] mob:h-[calc(70vw+80px)] tablet:h-[30vw] laptoplg:h-[450px] desktop:h-[370px] w-full flex items-center justify-center laptoplg:max-w-[500px] desktop:w-fit"
      // laptop:w-fit
      onClick={onClick}
    >
      <PinContainer title={projectUrl} href="/">
        {/* <div className="flex basis-full p-4 tracking-tight text-slate-100/50 sm:basis-1/2 max-w-full min-w-[20rem] h-[20rem] "> */}
        {/* [direction:rtl] */}
        <div className="grid tablet:grid-cols-2  gap-5 overflow-hidden items-center p-4 tracking-tight  sm:basis-1/2 max-w-full min-w-[10rem] tablet:min-w-[20rem] h-full laptoplg:grid-cols-1  ">
          {/* tablet:h-[20rem]  */}
          <div className="flex flex-1 w-full laptop:max-h-[300px] rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 ">
            <img
              src={img}
              alt={`${name} image space`}
              className="object-cover w-full"
            />
          </div>
          {/* [direction:ltr] */}
          <div>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
              {/* text-slate-100 */}
              {name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 line-clamp-3 ">
                {description}
              </span>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
