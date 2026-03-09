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
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [options, setOptions] = useState<PasswordOptionsValue>(DEFAULT_OPTIONS);

  const [seed, setSeed] = useState(0);

  const password = useMemo(() => {
    return generatePassword({
      length,
      seed,
      ...options,
    });
  }, [length, options, seed]);

  const strength = calculateStrength(password);

  const generate = () => {
    setSeed((prevSeed) => prevSeed + 1);
  };
  return {
    length,
    setLength,
    options,
    setOptions,
    password,
    strength,
    generate,
  };
};
