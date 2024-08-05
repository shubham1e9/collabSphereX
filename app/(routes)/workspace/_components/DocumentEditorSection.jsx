import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection({params}) {
  return (
    <div>
      {/* Header */}
        <DocumentHeader/>
      {/* Document info */}
        <DocumentInfo params={params}/>
    {/* Rich TExt Editor */}
    </div>
  );
}

export default DocumentEditorSection;
