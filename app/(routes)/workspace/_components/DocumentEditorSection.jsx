import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";
import RichDocumentEditor from "./RichDocumentEditor";

function DocumentEditorSection({ params }) {
  return (
    <div>
      {/* Header */}
      <DocumentHeader />
      {/* Document info */}
      <DocumentInfo params={params} />
      {/* Rich TExt Editor */}
      <RichDocumentEditor params={params} />
    </div>
  );
}

export default DocumentEditorSection;
