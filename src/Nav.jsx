import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Events",
    "Team",
    "Gallery",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <img className='h-10 w-11 my-2 mx-2' src="src/assets/SWITCH_LOGO.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex ">
        <NavbarBrand>
        <img className='h-10 w-11 my-2 mx-2' src="src/assets/SWITCH_LOGO.png" />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
          Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" >
          Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

