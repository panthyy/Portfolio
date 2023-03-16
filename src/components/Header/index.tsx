export const Header = () => {
  const menuItems = [
    {
      href: "#Projects",
      text: "Projects",
    },
    {
      href: "#Resume",
      text: "Resume",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "#Contact",
      text: "Contact",
    },
  ];

  return (
    <header className="  h-[123px] mt-4  flex items-center justify-center mb-[50px] sm:mb-[133px] ">
      <div className="w-full ">
        <div className=" flex h-[29px] justify-between  ">
          <div className="text-[18px] font-[Inter] ">
            <a className="" href="/">
              BSCE Student at Lund university
            </a>
          </div>
          <nav className="flex items-center justify-center Nav gap-7">
            <ul className="text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap">
              <ul className="text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap">
                {menuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  );
                })}
              </ul>
            </ul>
            <button
              onClick={() => {
                console.log("Unimplemented");
              }}
              className=""
            ></button>
          </nav>
        </div>
        <nav className="flex items-center justify-center Nav gap-7">
          <ul className="text-[18px] mt-10 justify-evenly w-full sm:hidden flex  group-hover:cursor-pointer align-middle gap">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
