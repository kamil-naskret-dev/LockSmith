import { useState, useMemo } from "react";
import { generatePassword } from "../lib/generatePassword";
import { calculateStrength } from "../lib/calculateStrength";
import type { PasswordOptionsValue } from "../subcomponents/PasswordOptions/PasswordOptions";

const DEFAULT_LENGTH = 10;

const DEFAULT_OPTIONS: PasswordOptionsValue = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
};

export const usePasswordGenerator = () => {
  const [length, setLengthState] = useState(DEFAULT_LENGTH);
  const [options, setOptionsState] =
    useState<PasswordOptionsValue>(DEFAULT_OPTIONS);

  const [seed, setSeed] = useState(0);

  const minLength = Object.values(options).filter(Boolean).length;

  const setLength = (value: number) => {
    setLengthState(Math.max(value, minLength));
  };

  const setOptions = (next: PasswordOptionsValue) => {
    const nextMinLength = Object.values(next).filter(Boolean).length;

    setOptionsState(next);

    setLengthState((prev) => Math.max(prev, nextMinLength));
  };

  const password = useMemo(() => {
    return generatePassword({
      length,
      seed,
      ...options,
    });
  }, [length, options, seed]);

  const strength = calculateStrength(password);

  const generate = () => {
    setSeed((prev) => prev + 1);
  };

  return {
    length,
    setLength,
    options,
    setOptions,
    password,
    strength,
    generate,
    minLength,
  };
};
