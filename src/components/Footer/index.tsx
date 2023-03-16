import { BsGithub, BsLinkedin } from "react-icons/bs/index.js";
import { GrMail } from "react-icons/gr/index.js";

type SocialLinkProps = {
  icon: React.ReactNode;
  link: string;
  text: string;
};

export const Footer = () => {
  const ButtonsData = [
    {
      icon: <GrMail />,
      link: "mailto:fahad.alhatshami@hotmail.com",
      text: "Mail",
    },
    {
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/fahadalh/",
      text: "LinkedIn",
    },
    {
      icon: <BsGithub />,
      link: "https://github.com/Panthyy",
      text: "GitHub",
    },
  ];

  const SocialLink = (props: SocialLinkProps) => {
    return (
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center h-10 gap-2 transition-all duration-300 ease-in-out border-2 border-gray-400 rounded-sm cursor-pointer active:bg-gray-800 active:text-white active:scale-95 hover:bg-gray-800 hover:text-white w-52">
          {props.icon}
          <p className="text-[18px]"> {props.text}</p>
        </div>
      </a>
    );
  };

  return (
    <footer
      id="Contact"
      className=" w-full  sm:gap-[100px]  mt-[111px] flex  justify-between mb-[60px] "
    >
      <header className=" text-[20px]">CONTACT </header>
      <div className="flex  justify-end  w-auto  flex-wrap  text-[Inter] text-[18px] gap-[12px]">
        {ButtonsData.map((button, index) => (
          <SocialLink key={index} {...button} />
        ))}
      </div>
    </footer>
  );
};
