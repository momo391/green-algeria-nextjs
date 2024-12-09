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

export const Help = () => {
  return (
    <>
      <section
        id="click"
        className="flex items-center justify-evenly gap-8 container mx-auto"
      >
        <div className="flex items-start justify-center max-w-md flex-col gap-4 ">
          <p className="text-4xl uppercase text-primary">
            don't plant tree blindly !
          </p>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            eos voluptas error repudiandae in exercitationem ad consectetur
            reiciendis nulla, nostrum quam quasi repellat.
          </p>
        </div>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Help center</CardTitle>
              {/* <CardDescription>
                removing useless concrete and replace it with sakura trees{" "}
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                we have professionals here to help identify which type of trees
                that suite your environemnt and your budget.
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size={"lg"}>
                Get Help
                <Icon icon={"line-md:phone-filled"} className="ms-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};
