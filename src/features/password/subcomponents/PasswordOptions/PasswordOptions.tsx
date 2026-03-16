import { Checkbox } from "@/components/ui/checkbox/checkbox";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field/field";

export type PasswordOptionsValue = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

type PasswordOptionsProps = {
  options: PasswordOptionsValue;
  onChange: (value: PasswordOptionsValue) => void;
};

const OPTIONS_LABELS: Record<keyof PasswordOptionsValue, string> = {
  uppercase: "Include Uppercase Letters",
  lowercase: "Include Lowercase Letters",
  numbers: "Include Numbers",
  symbols: "Include Symbols",
};

export const PasswordOptions = ({
  options,
  onChange,
}: PasswordOptionsProps) => {
  const handleChange =
    (key: keyof PasswordOptionsValue) => (checked: boolean) => {
      const next = {
        ...options,
        [key]: checked,
      };

      if (!Object.values(next).some(Boolean)) return;

      onChange(next);
    };

  return (
    <FieldSet>
      <FieldLegend className="sr-only">Character Types</FieldLegend>
      {Object.keys(options).map((key) => (
        <Field key={key} orientation="horizontal">
          <Checkbox
            id={key}
            checked={options[key as keyof typeof options]}
            onCheckedChange={handleChange(key as keyof typeof options)}
          />
          <FieldLabel htmlFor={key}>
            {OPTIONS_LABELS[key as keyof typeof OPTIONS_LABELS]}
          </FieldLabel>
        </Field>
      ))}
    </FieldSet>
  );
};
