import { Checkbox } from "@/components/ui/checkbox/checkbox";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field/field";

export const PasswordOptions = () => {
  return (
    <FieldSet>
      <FieldLegend className="sr-only">Character Types</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox id="uppercase" />
        <FieldLabel htmlFor="uppercase">Include Uppercase Letters</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="lowercase" />
        <FieldLabel htmlFor="lowercase">Include Lowercase Letters</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="numbers" />
        <FieldLabel htmlFor="numbers">Include Numbers</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="symbols" />
        <FieldLabel htmlFor="symbols">Include Symbols</FieldLabel>
      </Field>
    </FieldSet>
  );
};
