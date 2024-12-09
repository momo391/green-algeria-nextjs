import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="  flex items-center justify-center flex-col gap-12 container mx-auto"
      >
        <div className="max-w-3xl text-center mx-auto flex flex-col gap-4">
          <p className="font-sans font-semibold uppercase text-primary text-4xl">
            About us
          </p>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            delectus sequi voluptate ipsa excepturi aperiam, exercitationem
            doloribus provident tempore nobis! Enim quaerat praesentium, officia
            velit dicta placeat officiis repellendus neque.
          </p>
        </div>
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
        {/* <div>
          <Button size={"lg"}>
            more about us{" "}
            <Icon
              icon={"line-md:external-link-rounded"}
              className="ml-2 size-6"
            />
          </Button>
        </div> */}
      </section>
    </>
  );
};

export const AboutCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-left max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>only plant tree ?</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-light">
              No, green algeria is far more than that. green algeria is the
              result of a long and hard process of getting rid of the concrete
              that took every sidewalk and street in algeria. coperating with
              prefessional experts, we are able to plant trees on all the
              streets of algeria.
            </p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button size={"lg"} variant={"default"}>
              Read more
              <Icon
                icon={"line-md:external-link-rounded"}
                className="ml-2 size-6"
              />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
