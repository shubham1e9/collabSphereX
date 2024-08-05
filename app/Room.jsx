"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

export function Room({ children, params }) {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      
      resolveUsers={async ({ userIds }) => {
        const q = query(collection(db, "CSUsers"),where("email", "in", userIds));
        const querySnapshot = await getDocs(q);
        const userList = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          userList.push(doc.data());
        });
        return userList;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const q = query(collection(db, "CSUsers"), where("email", "!=", null));
        const querySnapshot = await getDocs(q);
        let userList = [];
        querySnapshot.forEach((doc) => {
          userList.push(doc.data());
        });

        if (text) {
          // Filter any way you'd like, e.g. checking if the name matches
          userList = userList.filter((user) => user.name.includes(text));
        }
        // Return a list of user IDs that match the query
        return userList.map((user) => user.id);
      }}
    >
      <RoomProvider id={params?.documentid}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
