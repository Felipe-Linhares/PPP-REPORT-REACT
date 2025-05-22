// src/components/ReportPreview.tsx
import React from "react";

interface ReportPreviewProps {
  reportContent: string;
  isCopied: boolean;
  onCopy: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({
  reportContent,
  isCopied,
  onCopy,
}) => {
  return (
    <div className="preview-section">
      <h1>Visualização</h1>
      <pre id="report">{reportContent}</pre>
      <div className="button-container">
        <button
          className={`copy-button ${isCopied ? "copied" : ""}`}
          onClick={onCopy}
        >
          <span className="button-text">Copiar Relatório</span>{" "}
          <span className="copied-text">Copiado!</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default ReportPreview;
