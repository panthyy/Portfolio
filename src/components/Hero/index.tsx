import { useEffect, useState } from "react";
import directus from "../../directus";

const data = (await directus.items("Hero_Info").readByQuery()) as any;

console.log(data);
export const Hero = () => {
  return (
    <section className="flex flex-col ">
      <span className=" font-[Inter] mb-[16px]">Heey 👋, I’m</span>
      <h1 className="w-min sm:text-6xl mb-[24px]  whitespace-nowrap lg:text-[86px] bg-gradient-to-r text-transparent  bg-clip-text from-[#9845E8] via-[#33D2FF]  to-[#DD5789]">
        {data.data.title}
      </h1>

      <p className="dark:text-[#F0F0F0] ">{data.data.body}</p>
      <div className=" mt-[60px] flex items-center gap-3">
        <p className=" text-[24px]">Say hi</p>
        <a href={"https://www.linkedin.com/in/fahadalhatshami/"}>---&gt;</a>
      </div>
    </section>
  );
};
