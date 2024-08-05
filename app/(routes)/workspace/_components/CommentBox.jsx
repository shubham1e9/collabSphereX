"use client";

import { Composer, Thread } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react";
import React from "react";

function CommentBox() {
  const { threads } = useThreads();

  return (
    <div className="w-[300px] h-[350px] shadow-lg rounded-lg overflow-auto">
      {threads?.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
      <Composer />
    </div>
  );
}

export default CommentBox;
