"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";
import { useSession } from "next-auth/react";
//fix the hydration error: TODO
export default function Nav() {
  const { status } = useSession();
  console.log(status);
  return (
    <Navbar>
      <NavbarBrand>
        <Image height={60} width={60} alt="logo" src={"/test.svg"} />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/group">
            Group
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
  {status === "loading" ? (
    <NavbarItem>
      <div>Loading...</div> {/* This div will display when status is "loading" */}
    </NavbarItem>
  ) : status === "authenticated" ? (
    <NavbarItem>
      <SignOut />
    </NavbarItem>
  ) : (
    <NavbarItem>
      <SignIn />
    </NavbarItem>
  )}
</NavbarContent>

    </Navbar>
  );
}
