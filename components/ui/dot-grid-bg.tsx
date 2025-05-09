import React from "react";

export function GridBackgroundWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center dark:bg-black-100 bg-white  dark:bg-grid-gray-500/[0.4] bg-grid-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
      {children}
      {/* </p> */}
    </div>
  );
}

export function DotBackgroundWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center dark:bg-black-100 bg-white  dark:bg-dot-gray-500/[0.4] bg-dot-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
      {children}
      {/* </p> */}
    </div>
  );
}
