import { Checkbox } from "@/components/ui/checkbox/checkbox";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field/field";

type PasswordOptionsValue = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

type PasswordOptionsProps = {
  options: PasswordOptionsValue;
  onChange: (value: PasswordOptionsValue) => void;
};

export const PasswordOptions = ({
  options,
  onChange,
}: PasswordOptionsProps) => {
  const handleChange =
    (key: keyof PasswordOptionsValue) => (checked: boolean) => {
      onChange({
        ...options,
        [key]: checked,
      });
    };

  return (
    <FieldSet>
      <FieldLegend className="sr-only">Character Types</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox
          id="uppercase"
          checked={options.uppercase}
          onCheckedChange={handleChange("uppercase")}
        />
        <FieldLabel htmlFor="uppercase">Include Uppercase Letters</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="lowercase"
          checked={options.lowercase}
          onCheckedChange={handleChange("lowercase")}
        />
        <FieldLabel htmlFor="lowercase">Include Lowercase Letters</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="numbers"
          checked={options.numbers}
          onCheckedChange={handleChange("numbers")}
        />
        <FieldLabel htmlFor="numbers">Include Numbers</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="symbols"
          checked={options.symbols}
          onCheckedChange={handleChange("symbols")}
        />
        <FieldLabel htmlFor="symbols">Include Symbols</FieldLabel>
      </Field>
    </FieldSet>
  );
};
