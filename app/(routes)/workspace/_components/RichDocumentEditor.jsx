"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";

function RichDocumentEditor({ params }) {
  const ref = useRef();
  let editor;
  const { user } = useUser();
  const [documentOutput, setDocumentOutput] = useState([]);
  let isFetched = false;

  useEffect(() => {
    user && InitEditor();
  }, [user]);

  // useEffect(() => {
  //   params && GetDocumentOutput();
  // }, [params]);

  //Used to save Document.......................................

  const SaveDocument = () => {
    ref.current.save().then(async (outputData) => {
      console.log(outputData);
      const docRef = doc(db, "documentOutput", params?.documentid);
      await updateDoc(docRef, {
        output: outputData,
        editedBy: user?.primaryEmailAddress?.emailAddress,
      });
    });
  };
  const GetDocumentOutput = () => {
    const unsubscribe = onSnapshot(
      doc(db, "documentOutput", params?.documentid),
      (doc) => {
        if (
          isFetched == false ||
          doc.data()?.editedBy != user?.primaryEmailAddress?.emailAddress
        )
          doc.data()?.output && editor.render(doc.data()?.output);
        isFetched = true;
      }
    );
  };

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (ap, event) => {
          SaveDocument();
        },
        onReady: () => {
          GetDocumentOutput();
        },
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editorjs",
        tools: {
          header: Header,
          delimiter: Delimiter,
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+A",
            config: {
              alertTypes: [
                "primary",
                "secondary",
                "info",
                "success",
                "warning",
                "danger",
                "light",
                "dark",
              ],
              defaultType: "primary",
              messagePlaceholder: "Enter something",
            },
          },
        },
        // data:documentOutput?documentOutput:'';
      });
      ref.current = editor;
    }
  };

  return (
    <div className="lg:-ml-40">
      <div id="editorjs"></div>
    </div>
  );
}

export default RichDocumentEditor;
