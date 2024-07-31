"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";
import Dashboard from "../page";

function Header() {
  const { orgId } = useAuth();
  console.log(orgId);
  return (
    <div className="flex items-center justify-between p-3 shadow-md">
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
}

export default Header;
