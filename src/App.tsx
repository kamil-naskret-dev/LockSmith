import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button/button";
import { PasswordReadable } from "./features/password/PasswordReadable/PasswordReadable";
import { PasswordLength } from "./features/password/subcomponents/PasswordLength/PasswordLength";
import { PasswordOptions } from "./features/password/subcomponents/PasswordOptions/PasswordOptions";
import { PasswordQuality } from "./features/password/subcomponents/PasswordQuality/PasswordQuality";
import { usePasswordGenerator } from "./features/password/hooks/usePasswordGenerator";

export const App = () => {
  const {
    length,
    setLength,
    options,
    setOptions,
    password,
    strength,
    generate,
  } = usePasswordGenerator();

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-r from-ds-primary-900 to-ds-primary-950 text-white px-4">
      <div className="w-full max-w-135 text-center flex flex-col gap-8">
        <h1 className="text-ds-gray-600 text-base sm:text-2xl">
          Password Generator
        </h1>
        <section className="flex flex-col gap-6">
          <div className="px-4 sm:px-8 py-4 bg-ds-primary-800">
            <PasswordReadable password={password} />
          </div>
          <form
            className="px-4 sm:px-8 py-6 bg-ds-primary-800 flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              generate();
            }}
          >
            <PasswordLength length={length} onChange={setLength} />
            <PasswordOptions options={options} onChange={setOptions} />
            <PasswordQuality score={strength} />
            <Button type="submit" variant="primary" size="form-submit">
              Generate <ArrowRight aria-hidden="true" />
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};
