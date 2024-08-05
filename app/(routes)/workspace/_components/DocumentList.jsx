import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import DocumentOptions from "./DocumentOptions";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { toast } from "sonner";

function DocumentList({ documentList, params }) {
  const router = useRouter();

  const DeleteDocument = async (docId) => {
    await deleteDoc(doc(db, "workspaceDocuments", docId));
    toast("Document Deleted Successfully")
  };

  return (
    <div>
      {documentList.map((doc, index) => {
        return (
          <div
            key={index}
            onClick={() =>
              router.push("/workspace/" + params?.workspaceid + "/" + doc?.id)
            }
            className={`p-2 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 flex items-center justify-between
            ${doc?.id == params?.documantid && "bg-white"}`}
          >
            <div className="flex items-center gap-2">
              {!doc.emoji && (
                <Image src={"/document.png"} alt="img" width={20} height={20} />
              )}
              <h2 className="flex gap-2">
                {doc?.emoji}
                {doc.documentName}
              </h2>
            </div>
            <DocumentOptions
              doc={doc}
              deleteDocument={(docId) => DeleteDocument(docId)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DocumentList;
