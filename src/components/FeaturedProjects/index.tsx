import { useEffect, useState } from "react";
import anime from "animejs";
import { Waypoint } from "react-waypoint";
import directus from "../../directus";

const data = await directus.items("Projects").readByQuery();

const Projects = data.data as Project[];
type Project = {
  id: number;
  title: string;

  description: string;
  image: string;
  link: string;
  github: string;
  topics: string[];
};
export const FeaturedProjects = () => {
  let playAnim: () => void;

  useEffect(() => {
    playAnim = anime({
      targets: ".featured-projects__project",
      translateX: [
        { value: "-100vw", duration: 0 },
        { value: "0%", duration: 1000 },
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000 },
      ],
      delay: anime.stagger(500),
      autoplay: false,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    }).play;
  }, []);

  const Project = ({ project }: { project: Project }) => {
    return (
      <div className=" mb-[57px] flex-col lg:flex-row  gap-10 w-full pt-full relative flex">
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md lg:w-[40%]">
          <img
            className="object-contain w-full h-full"
            src={"https://cms.codebykai.com/assets/" + project.image}
          />
        </div>
        <div className="flex  w-[60%] flex-col  gap-4 lg:mt-[20px] ">
          <div className="flex items-center justify-between  flex-wrap mb-[12px]">
            <h3 className=" text-[24px]">{project.title}</h3>
            <div className="Projectas h-full  my-4 mt-2 text-[24px] flex ml-2 ">
              <div className="">
                <a href={project?.link || "/"}></a>
              </div>
              <div className="ml-3">
                <a className="" href={project.description || "/"}></a>
              </div>
            </div>
          </div>
          <p className="dark:text-[#C4C4C4] text-[#1A1A1A]">
            {project.description}
          </p>
          <div className="mt-auto TechnologyUsed">
            <span className="text-[#6CACE4]  text-[16px] text-">
              {project.topics
                .map((x) => {
                  return x[0].toUpperCase() + x.slice(1);
                })
                .join(" - ")}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Waypoint
      bottomOffset="50%"
      onEnter={() => {
        playAnim();
      }}
    >
      <section id="Projects" className="flex justify-center mt-[100px] ">
        <div className=" w-[1057px]">
          <header className=" font-[Inter] text-[18px]">
            FEATURED PROJECTS
          </header>
          <div className="mt-[52px] gap-10 font-[Inter] w-full flex flex-wrap ">
            {Projects &&
              Projects.map((project, index) => (
                <>
                  <Project key={index} project={project} />
                  {index === 0 && (
                    <div className="w-full h-[1px] bg-gray-400"></div>
                  )}
                </>
              ))}
          </div>
        </div>
      </section>
    </Waypoint>
  );
};
