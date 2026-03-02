import { useState, useCallback } from "react";
import { useTimeout } from "./useTimeout";

interface UseClipboardOptions {
  resetAfter?: number;
}

export const useClipboard = (options: UseClipboardOptions = {}) => {
  const { resetAfter = 2000 } = options;
  const [copied, setCopied] = useState(false);
  const { set } = useTimeout();

  const copy = useCallback(
    async (value: string) => {
      if (!value) return false;

      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);

        set(() => {
          setCopied(false);
        }, resetAfter);

        return true;
      } catch (error) {
        console.error("Clipboard copy failed", error);
        return false;
      }
    },
    [resetAfter, set],
  );

  return {
    copied,
    copy,
  };
};
