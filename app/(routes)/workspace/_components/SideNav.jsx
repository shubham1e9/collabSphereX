"use client"
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { db } from "@/config/firebaseConfig";
import { collection, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore'
import { Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import DocumentList from "./DocumentList";

function SideNav({params}) {

    const [documentList, setDocumentList] = useState([]);

    useEffect(() => {
        params && GetDocumentList();
        console.log(params)
    }, [params])

    //Used to get document List

    const GetDocumentList = () => {
      const q=query(collection(db,'workspaceDocument'),
      where('workspaceId','==',Number(params?.workspaceid)));
        console.log("jere")
        console.log(q)
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          setDocumentList([]);
            querySnapshot.forEach((doc) => {
                setDocumentList(documentList => [...documentList, doc.data()]);
            });
        });
        console.log(documentList);
    }
    
  return (
    <div className="fixed h-screen p-5 shadow-md bg-amber-200 md:w-72 md:block ">
      <div className="flex items-center justify-between">
        <Logo />
        <Bell className="w-5 h-5 text-gray-800" />
      </div>
      <hr className="my-5 border-orange-500 border-t-1"/>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Workspace Name</h2>
          <Button size="sm">+</Button>
        </div>
      </div>
      {/* Document List */}
      <DocumentList documentList={documentList} params={params}/>
    </div>
  );
}

export default SideNav;
