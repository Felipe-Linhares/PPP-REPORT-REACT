// src/utils/reportFormatter.ts

/**
 * Formats a list of items for the PPP report, applying line breaks and indentation.
 * Ensures the hyphen '-' is always on the same line as the start of the item's text.
 * @param items - A string containing items separated by newlines.
 * @param maxLineLength - Maximum characters per line before breaking.
 * @param indent - Indentation string for continuation lines.
 * @returns Formatted string with newlines and indentation.
 */
export const formatReportList = (
  items: string,
  maxLineLength: number,
  indent: string
): string => {
  const trimmedItems = items.split("\n").filter((item) => item.trim());
  if (trimmedItems.length === 0) {
    return "- Nenhum.";
  }

  return trimmedItems
    .map((item) => {
      let formattedItem = item.trim();
      // Capitalize the first letter
      formattedItem =
        formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1);
      // Add a period if not present
      if (!formattedItem.endsWith(".")) {
        formattedItem += ".";
      }

      const lines: string[] = [];
      const initialPrefix = "- "; // Prefix for the first line of an item

      let currentRawText = formattedItem;
      let isFirstLineOfItem = true;

      while (currentRawText.length > 0) {
        const currentPrefix = isFirstLineOfItem ? initialPrefix : indent;
        const availableLength = maxLineLength - currentPrefix.length;

        if (currentRawText.length <= availableLength) {
          lines.push(currentPrefix + currentRawText);
          currentRawText = "";
          break;
        }

        // Try to find a breaking point at the last space before the available length limit
        const segment = currentRawText.substring(0, availableLength);
        const lastSpaceIndex = segment.lastIndexOf(" ");

        let linePart = "";
        let remainingPart = "";

        if (lastSpaceIndex !== -1 && lastSpaceIndex > 0) {
          // Break at the last space
          linePart = currentRawText.substring(0, lastSpaceIndex);
          remainingPart = currentRawText
            .substring(lastSpaceIndex + 1)
            .trimStart();
        } else {
          // Force break if no suitable space is found (for very long words)
          linePart = segment;
          remainingPart = currentRawText.substring(availableLength).trimStart();
        }

        lines.push(currentPrefix + linePart);
        currentRawText = remainingPart;
        isFirstLineOfItem = false;
      }

      return lines.join("\n");
    })
    .join("\n");
};
