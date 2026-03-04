import { Slider } from "@/components/ui/slider/slider";
import { useState } from "react";

export const PasswordLength = () => {
  const [length, setLength] = useState(10);

  const handleChange = (value: number[]) => {
    setLength(value[0]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg text-ds-gray-200 font-bold leading-6">
          Character Length
        </p>
        <p className="text-[2rem] leading-10.5 text-ds-accent-400 font-bold">
          {length}
        </p>
      </div>
      <Slider
        max={20}
        min={1}
        defaultValue={[length]}
        step={1}
        onValueChange={handleChange}
      />
    </div>
  );
};
