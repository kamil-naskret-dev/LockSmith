import { Input } from "@/components/ui/input/input";
import { PasswordCopy } from "../subcomponents/PasswordCopy/PasswordCopy";

type PasswordReadableProps = {
  password: string;
};

export const PasswordReadable = ({ password }: PasswordReadableProps) => {
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
