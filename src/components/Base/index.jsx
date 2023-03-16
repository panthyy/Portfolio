import "../../styles/global.css";
import anime from "animejs";
import { useRef, useState, useEffect } from "react";
const Base = ({ children }) => {
  return (
    <div
      id="Base"
      className=" dark:text-[#FFFFFF] dark:bg-[#111111] text-[#1A1A1A] flex px-8 sm:px-20  justify-center w-full min-h-full "
    >
      <div id="Children" className=" Background  w-full sm:max-w-[1100px] ">
        {children}
      </div>
    </div>
  );
};
export { Base };
