import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import DocumentOptions from "./DocumentOptions";


function DocumentList({ documentList, params }) {

  const router = useRouter();

  return (
    <div>
      {documentList.map((doc, index) => {
        return (
          <div
            key={index} onClick={() => router.push('/workspace/' + params?.workspaceid+ "/" + doc?.id)}
            className={`p-2 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 flex items-center justify-between
            ${doc?.id == params?.documantid && "bg-white"}`}>
            <div className="flex items-center gap-2">
              {!doc.emoji && <Image src={"/document.png"} alt="img" width={20} height={20} />}
              <h2 className="flex gap-2">
                {doc?.emoji}
                {doc.documentName}
              </h2>
            </div>
            <DocumentOptions/>
          </div>
        );
      })}
    </div>
  );
}

export default DocumentList;