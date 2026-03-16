import { Slider } from "@/components/ui/slider/slider";

type PasswordLengthProps = {
  length: number;
  onChange: (value: number) => void;
  min: number;
};

export const PasswordLength = ({
  length,
  onChange,
  min,
}: PasswordLengthProps) => {
  const handleChange = (value: number[]) => {
    onChange(value[0]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-base leading-5 sm:text-lg text-ds-gray-200 font-bold sm:leading-6">
          Character Length
        </p>
        <p className="text-2xl leading-8 sm:text-[2rem] sm:leading-10.5 text-ds-accent-400 font-bold">
          {length}
        </p>
      </div>
      <Slider
        max={20}
        min={min}
        defaultValue={[length]}
        step={1}
        onValueChange={handleChange}
      />
    </div>
  );
};
