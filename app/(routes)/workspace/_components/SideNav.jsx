"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { db } from "@/config/firebaseConfig";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Bell, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import DocumentList from "./DocumentList";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

function SideNav({ params }) {
  const [documentList, setDocumentList] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    params && GetDocumentList();
  }, [params]);

  //Used to get document List.......................................................

  const GetDocumentList = () => {
    const q = query(
      collection(db, "workspaceDocuments"),
      where("workspaceId", "==", Number(params?.workspaceid))
    );
    setDocumentList([]);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDocumentList((documentList) => [...documentList, doc.data()]);
      });
    });
  };

  // Create new document...............................................................

  const CreateNewDocument = async () => {

    if(documentList.length > 77) {
      toast("Upgrade to add new file", {
        description: "You reach max file, Please upgrade for unlimited files creation.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
      return;
    }
    
    setLoading(true);
    const docId = uuid4();
    await setDoc(doc(db, "workspaceDocuments", docId.toString()), {
      workspaceId: Number(params?.workspaceid),
      createdBy: user?.primaryEmailAddress?.emailAddress,
      coverImage: null,
      emoji: null,
      id: docId,
      documentName: "Untitled Document",
      documentOutput: [],
    });

    await setDoc(doc(db, 'documentOutput', docId.toString()), {
      docId: docId,
      output: []
    })

    setLoading(false);
    router.replace("/workspace/" + params?.workspaceid + "/" + docId);
  };

  return (
    <div className="fixed h-screen p-5 bg-blue-100 shadow-md md:w-72 md:block ">
      <div className="flex items-center justify-between">
        <Logo />
        <Bell className="w-5 h-5 text-gray-800" />
      </div>
      <hr className="my-5 border-gray-400" />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Workspace Name</h2>
          <Button size="sm" onClick={CreateNewDocument}>
            {loading ? <Loader2Icon className="w-4 h-4 animate-spin" /> : "+"}
          </Button>
        </div>
      </div>
      
       {/* Document List...................................................... */}
      <DocumentList documentList={documentList} params={params} />
      
       {/* Progress bar....................................................... */}
      <div className="absolute bottom-10 w-[85%]">
      <Progress value={77} />
      <h2 className="my-5 text-sm font-light"><strong>{documentList?.length}</strong> Out of <strong>5</strong> files used</h2>
      <h2 className="text-sm font-light">Upgrade your plane for unlimited access</h2>
      </div>
    </div>
  );
}

export default SideNav;
