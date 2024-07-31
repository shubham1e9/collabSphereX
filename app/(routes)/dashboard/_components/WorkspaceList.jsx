"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function WorkspaceList() {
  const { user } = useUser();
  const [workspaceList, setWorkspaceList] = useState([]);
  return (
    <div className="p-10 my-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Hello {user?.fullName}</h2>
        <Link href={"/createworkspace"}>
          <Button>+</Button>
        </Link>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <h1 className="font-medium text-primary">Workspace</h1>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>
      {workspaceList?.length == 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image src={"/office.svg"} width={300} height={300} alt="workspace" />
          <h2>Create a new workspace</h2>
          <Link href={"/createworkspace"}>
            <Button className="my-3">
              + New Workspace
            </Button>
          </Link>
        </div>
      ) : (
        <div>Workspace List</div>
      )}
    </div>
  );
}

export default WorkspaceList;
