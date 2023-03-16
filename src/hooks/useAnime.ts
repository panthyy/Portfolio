import { useEffect } from "react";
import anime from "animejs";

type Props = {
  targets: HTMLElement[] | HTMLElement | string;
  duration: number;
  delay: number;
  autoplay: boolean;
  easing: string;
};

const useAnime = (props: Props) => {
  let anim = null;
  return new Promise((resolve) => {
    useEffect(() => {
      props.autoplay ? (anim = anime(props)) : anime(props);

      resolve([(play) => anim.play(), (pause) => anim.pause()]);
    }, []);
  });
};

export default useAnime;
