import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import bgImage from "@/assets/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="flex items-center min-h-screen justify-center relative"
      >
        <Image
          src={bgImage}
          alt="background"
          className="absolute inset-0 object-cover h-screen -z-50"
        />
        <div className="bg-black/50 absolute inset-0 -z-40"></div>

        <div className="max-w-3xl w-screen flex-col gap-4 flex text-center items-center">
          <p className="uppercase text-5xl md:text-7xl font-bold text-primary">
            green algeria
          </p>
          <p className="text-xs md:text-base dark:text-white text-primary-foreground font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nemo, consequatur voluptas quam voluptatem esse maxime nostrum
            perspiciatis molestiae, perferendis unde incidunt autem, quod modi
            atque labore voluptate dolor molestias.
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <Button size={"lg"} variant={"default"}>
              Get in touch
              <Icon icon={"line-md:heart-filled"} className="ml-2 size-6" />
            </Button>
            <Button size={"lg"} variant={"secondary"}>
              about us
              <Icon
                icon={"line-md:external-link-rounded"}
                className="ml-2 size-6"
              />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-2 md:bottom-4 inset-x-0 justify-center flex items-center">
          <Icon
            icon={"line-md:chevron-double-down"}
            className="text-muted-foreground/50 size-8 animate-bounce "
          />
        </div>
      </section>
    </>
  );
};
