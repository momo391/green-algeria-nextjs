import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export const Latest = () => {
  return (
    <>
      <section className="min-h-screen flex items-center flex-col justify-center gap-16">
        <div className="max-w-3xl text-center mx-auto flex flex-col gap-4">
          <p className="font-sans font-semibold uppercase text-primary text-4xl">
            latest touch
          </p>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            delectus sequi voluptate ipsa excepturi aperiam, exercitationem
            doloribus provident tempore nobis! Enim quaerat praesentium, officia
            velit dicta placeat officiis repellendus neque.
          </p>
        </div>
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4">
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
        <div>
          <Button size={"lg"} variant={"default"}>
            View more
            <Icon
              icon={"line-md:external-link-rounded"}
              className="ml-2 size-6"
            />
          </Button>
        </div>
      </section>
    </>
  );
};

export const LatestCard = () => {
  return (
    <>
      <div className="w-screen max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Setif</CardTitle>
            <CardDescription>
              removing useless concrete and replace it with sakura trees{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              similique officia eius maiores ex perspiciatis aperiam ea expedita
              sint ipsam, ipsa in minus sed iusto ab repellendus molestiae! Sed,
              eos.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-primary inline-flex items-center justify-center gap-2">
              <Icon icon={"line-md:emoji-grin-filled"} />
              150.000 tree planted
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
