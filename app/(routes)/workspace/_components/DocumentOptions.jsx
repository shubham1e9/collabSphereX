import { Link2Icon, MoreVerticalIcon, PenBox, Trash2Icon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DocumentOptions() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger><MoreVerticalIcon className="w-4 h-4" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex gap-2"> <Link2Icon className="w-4 h-4"/> Share link</DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2"> <PenBox className="w-4 h-4"/> Rename</DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 text-red-600"> <Trash2Icon className="w-4 h-4"/> Delete</DropdownMenuItem> 
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DocumentOptions;
