import { Button } from "@/components/ui/button/button";
import { useClipboard } from "@/hooks/useClipboard";
import { Files } from "lucide-react";
import { CopiedPassword } from "./CopiedPassword";

type PasswordCopyProps = {
  password: string;
};

const RESET_TIMEOUT = 2000;

export const PasswordCopy = ({ password }: PasswordCopyProps) => {
  const { copied, copy } = useClipboard({ resetAfter: RESET_TIMEOUT });

  const handleClick = () => {
    copy(password);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          size="icon-only"
          variant="naked"
          aria-label={copied ? "Password copied" : "Copy password"}
          type="button"
          disabled={!password}
          onClick={handleClick}
          className="relative overflow-visible"
        >
          {copied && <CopiedPassword />}
          <Files className="text-ds-accent-400 w-5.25 h-6" aria-hidden="true" />
        </Button>
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {copied && "Password copied to clipboard"}
      </div>
    </>
  );
};
