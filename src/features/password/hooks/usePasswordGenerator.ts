import { useState, useMemo } from "react";
import { generatePassword } from "../lib/generatePassword";
import { calculateStrength } from "../lib/calculateStrength";

export const usePasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState("");

  const strength = useMemo(() => calculateStrength(password), [password]);

  const generate = () => {
    const newPassword = generatePassword({
      length,
      ...options,
    });
    setPassword(newPassword);
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
