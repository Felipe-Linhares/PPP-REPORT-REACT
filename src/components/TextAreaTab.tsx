// src/components/TextAreaTab.tsx
import type { RefObject } from "react"; // Import type for RefObject
import React from "react";
import { useAutoResizeTextarea } from "../hooks/useAutoResizeTextarea"; // Adjust path

interface TextAreaTabProps {
  tabId: string;
  activeTab: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
}

const TextAreaTab: React.FC<TextAreaTabProps> = ({
  tabId,
  activeTab,
  placeholder, // Destructure placeholder
  value, // Destructure value
  onChange,
  textAreaRef,
}) => {
  useAutoResizeTextarea(textAreaRef, value);

  return (
    <div
      className={`tab-content ${activeTab === tabId ? "active" : ""}`}
      data-tab={tabId}
    >
      <textarea
        ref={textAreaRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextAreaTab;
