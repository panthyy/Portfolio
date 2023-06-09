import { useRef, useState, useEffect } from "react";
import anime from "animejs";

export type Experience = {
  id: number;
  company: string;
  position: string;
  points: {
    point: string;
  }[];
};

function Experience({ Experiences }: { Experiences: Experience[] }) {
  const [ExperienceTabSelected, setExperienceTabSelected] = useState(0);

  const selectedRev = useRef(null);

  // TODO: REFACTOR THIS LATER
  useEffect(() => {
    window.addEventListener("resize", () => {
      const x = document.getElementById(
        "Experience" + ExperienceTabSelected
      ) as HTMLElement;
      anime({
        targets: selectedRev.current,
        translateX: x.offsetLeft,
        translateY: x.offsetTop,
        duration: 0,
      });
    });
  }, [ExperienceTabSelected]);
  useEffect(() => {
    const x = document.getElementById(
      "Experience" + ExperienceTabSelected
    ) as HTMLElement;
    anime({
      targets: selectedRev.current,
      translateX: x.offsetLeft,
      translateY: x.offsetTop,
      duration: 500,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  }, [ExperienceTabSelected]);
  return (
    <section
      id="Resume"
      className=" mt-[120px]   index == ExperienceTabSelected"
    >
      <header className="  text-[18px]   index == ExperienceTabSelected font-[Inter]">
        <a>EXPERIENCE</a>
      </header>
      <div className=" flex-wrap relative mt-[20px] gap-12 font-[Inter] w-full flex text-lg 1A1A1A">
        <div className="absolute z-0 w-full ">
          <div
            ref={selectedRev}
            className=" w-40 flex-shrink-0 rounded-md h-10 bg-[#1F1E1E] text-[#F0F0F0]"
          ></div>
        </div>
        {Experiences.map((experience, index) => {
          let y = "text-[#1A1A1A] dark:text-[#F0F0F0] z-10";
          return (
            <div
              key={index}
              id={"Experience" + index}
              onClick={() => setExperienceTabSelected(index)}
              className={
                "  hover:cursor-pointer hover:underline h-11 flex items-center justify-center rounded-md ExperienceBtn w-40 " +
                y
              }
            >
              {experience.company}
            </div>
          );
        })}
      </div>
      <div className=" mt-8 flex h-48 flex-col gap-[12px]">
        <h3 className=" text-[24px]  font-[Inter] ">
          {Experiences[ExperienceTabSelected].position}
        </h3>
        <span className="text-[#004E93] leading-6 font-[Inter] text-[16px]">
          {Experiences[ExperienceTabSelected].company}
        </span>
        <ul className=" flex flex-col dark:text-[#C4C4C4]  gap-[12px] font-[Inter] mt-2">
          {Experiences[ExperienceTabSelected].points.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              - {point.point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export { Experience };
