import { Input } from "@/components/ui/input/input";
import { PasswordCopy } from "../subcomponents/PasswordCopy";

export const PasswordReadable = () => {
  const password = "P4$5W";

  return (
    <div className="relative">
      <label htmlFor="generated-password" className="sr-only">
        Generated password
      </label>
      <Input
        id="generated-password"
        readOnly
        value={password}
        className="pr-14"
      />
      <PasswordCopy password={password} />
    </div>
  );
};
