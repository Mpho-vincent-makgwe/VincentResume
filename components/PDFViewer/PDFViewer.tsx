'use client'
import React from 'react';
import DocViewer, {  DocViewerRenderers } from "react-doc-viewer";

const PDFViewer = ({ pdfUrl }:any) => {
    const docs = [
        {uri: pdfUrl,
        fileType: 'pdf',
        },
    ]
  return (
    <div>
      <DocViewer documents={docs}
      pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
};

export default PDFViewer;
