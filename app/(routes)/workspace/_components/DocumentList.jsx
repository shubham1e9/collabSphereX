import Image from "next/image";
import React from "react";

function DocumentList({ documentList, params }) {
  return (
    <div>
      {documentList.map((doc, index) => {
        <div
          key={index}
          className={`p-2 mt-3 rounded-lg cursor-auto hover:bg-gray-200 ${
            doc.id == params?.documantid && "bg-white"
          }`}
        >
          <div className="flex items-center gap-2">
            {!doc.emoji && <Image src={"/file.png"} width={20} height={20} />}
            <h2 className="flex gap-2">
              {doc?.emoji}
              {doc.documentName}
            </h2>
          </div>
        </div>;
      })}
    </div>
  );
}

export default DocumentList;
