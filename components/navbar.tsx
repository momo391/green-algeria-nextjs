import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
export const Navbar = () => {
  return (
    <>
      <nav className="inset-x-0 top-0 h-20 fixed flex items-center justify-between  px-16 mx-auto z-50 bg-background/30 bg-clip-padding backdrop-filter backdrop-blur-sm">
        <div className="text-xl font-medium font-sans tracking-wide">
          <span>Gree Algeria</span>
        </div>
        <div className="flex items-center justify-center gap-8">
          <NavLink>Home</NavLink>
          <NavLink>store</NavLink>
          <NavLink>about us</NavLink>
          <NavLink>contact us</NavLink>
        </div>
        <div>
          <Button>
            Join us
            <Icon icon={"line-md:emoji-smile-wink"} />
          </Button>
        </div>
      </nav>
    </>
  );
};

export const NavLink = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <span className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-muted-foreground capitalize hover:text-primary cursor-pointer transition-colors">
        {children}
      </span>
    </>
  );
};
