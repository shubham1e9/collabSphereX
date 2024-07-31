"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkSpace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspaceName, setWorkspaceName] = useState();
  
  return (
    <div className="p-10 py-20 md:px-36 lg:px-52 xl:px-80">
      <div className="shadow-2xl rounded-xl">
        {/* cover image */}
        <div className="relative cursor-pointer group">
          <h2 className="absolute items-center justify-center hidden w-full h-full p-4 group-hover:flex">
            Change Cover
          </h2>
          <div className="group-hover:opacity-70">
            <Image
              src={coverImage}
              width={400}
              height={400}
              alt="workspace"
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>
        {/* Input Section */}
        <div className="p-12">
          <h2 className="text-xl font-medium">Create a new Workspace</h2>
          <h2 className="mt-2 text-sm">This is a shared space where you can collaborate with your team. You can always rename it.</h2>
          <div className="flex items-center gap-2 mt-8">
            <Button variant="outline"><SmilePlus/></Button>
            <Input placeholder="Workspace Name" onChange={(e) =>setWorkspaceName(e.target.value)} />
          </div>
          <div className="flex gap-6 mt-7 justify-normal">
            <Button disabled={!workspaceName?.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkSpace;
