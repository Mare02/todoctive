import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import BrandLogo from '@/components/BrandLogo';

export default function Homepage() {
  return (
    <Navbar position="static" height={'5rem'} className="bg-white shadow">
      <NavbarContent>
        <NavbarBrand>
          <NavbarItem>
            <BrandLogo></BrandLogo>
          </NavbarItem>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Avatar
          isBordered
          color="primary"
          size="sm"
          src="https://i.pravatar.cc/"
        />
      </NavbarContent>
    </Navbar>
  );
}