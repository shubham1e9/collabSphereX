"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { CloudCog, SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function DocumentInfo({ params }) {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [emoji, setEmoji] = useState();
  const [documentInfo, setDocumentInfo] = useState();

  useEffect(() => {
    params && GetDocumentInfo();
  }, [params]);

  // used to get document info

  const GetDocumentInfo = async () => {
    const docRef = doc(db, "workspaceDocuments", params?.documentid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocumentInfo(docSnap.data());
      setEmoji(docSnap.data()?.emoji);
      docSnap?.data()?.coverImage && setCoverImage(docSnap.data()?.coverImage);
    }
  };

  const updateDocumentInfo = async (key, value) => {
    const docRef = doc(db, "workspaceDocuments", params?.documentid);
    await updateDoc(docRef, {
      [key]: value,
    });
    toast.success("Document info updated successfully");
  };

  return (
    <div>
      {/* cover */}
      <CoverPicker
        setNewCover={(cover) => {
          setCoverImage(cover);
          updateDocumentInfo("coverImage", cover);
        }}
      >
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
              className="w-full h-[160px] object-cover rounded-t-xl"
            />
          </div>
        </div>
      </CoverPicker>
      {/* Emoji Picker */}
      <div className="absolute ml-10 mt-[-35px]">
        <EmojiPickerComponent setEmojiIcon={(emoji) => {
          setEmoji(emoji);
          updateDocumentInfo('emoji', emoji);
        }}>
          <div className="bg-[#ffffff87] p-3 rounded-xl">
            {emoji ? (
              <span className="text-2xl cursor-pointer">{emoji}</span>
            ) : (
              <SmilePlus className="w-8 h-8 text-gray-600 cursor-pointer" />
            )}
          </div>
        </EmojiPickerComponent>
      </div>
      {/* File Name */}
      <div className="p-10 mt-10">
        <input
          type="text"
          placeholder="Untitled Document"
          defaultValue={documentInfo?.documentName}
          className="text-3xl font-bold outline-none"
          onBlur={(event) => updateDocumentInfo('documentName',event.target.value)}
        />
      </div>
    </div>
  );
}
export default DocumentInfo;
