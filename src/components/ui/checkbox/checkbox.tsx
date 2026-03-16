import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "cursor-pointer peer size-5 shrink-0 border-2 border-input shadow-xs outline-none transition",
        "hover:border-ds-accent-400",
        "focus-visible:ring-2 focus-visible:ring-ds-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ds-primary-800",
        "data-[state=checked]:border-ds-accent-400 data-[state=checked]:bg-ds-accent-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 text-ds-gray-850" strokeWidth={5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
