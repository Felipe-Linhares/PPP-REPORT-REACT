// src/hooks/useAutoResizeTextarea.ts
import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * Custom hook to auto-resize a textarea element based on its content.
 * @param textareaRef - A React ref object pointing to the textarea element. Can be null initially.
 * @param value - The current value of the textarea, used as a dependency to trigger resize.
 */
export const useAutoResizeTextarea = (
  textareaRef: RefObject<HTMLTextAreaElement | null>, // <--- ESTA LINHA DEVE SER RefObject<HTMLTextAreaElement | null>
  value: string
) => {
  useEffect(() => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto"; // Reset height to recalculate
      element.style.height = element.scrollHeight + "px"; // Set height based on scroll height
    }
  }, [textareaRef, value]); // Re-run effect when textareaRef or value changes
};
