
function Hero() {
  return (
    <section className="flex flex-col ">
        <span className=" font-[Inter] mb-[16px]">Heey 👋, I’m</span>
      <h1 className="w-min sm:text-6xl mb-[24px]  whitespace-nowrap lg:text-[86px] bg-gradient-to-r text-transparent  bg-clip-text from-[#9845E8] via-[#33D2FF]  to-[#DD5789]">
        Fahad Alhatshami
      </h1>

      <p className="dark:text-[#F0F0F0] ">
       Lets dive into my childhood, I&apos;ve broken more things
        as a child than I can count. from game-boy&apos;s to my mother&apos;s computer.
        My curiosity drove me to discover and learn how
        things work. from all my small mistakes I&apos;ve learned one thing. that the
        most important thing in life is curiosity and its ability to massively
        improve results. being able to pick up technology or a tool and swiftly
        grasp its in and outs to be able to materialize my idea into a
        functional product is what I&apos;m mostly fond of.
      </p>
      <div className=" mt-[60px] flex items-center gap-3">
        <p className=" text-[24px]">Say hi</p>
        <a href={"https://www.linkedin.com/in/fahadalhatshami/"}>---&gt;</a>
      </div>
    </section>
  );
}
export { Hero };
