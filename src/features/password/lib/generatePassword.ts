import { getRandomInt, shuffle } from "@/helpers/random";
import { CHAR_SETS } from "../config/config";
import type { PasswordOptionsValue } from "../subcomponents/PasswordOptions/PasswordOptions";

type GeneratePasswordOptions = PasswordOptionsValue & {
  length: number;
  seed?: number;
};

export function generatePassword(options: GeneratePasswordOptions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { length, seed: _, ...flags } = options;

  const enabledSets = Object.entries(flags)
    .filter(([, enabled]) => enabled)
    .map(([key]) => CHAR_SETS[key as keyof typeof CHAR_SETS]);

  if (!enabledSets.length) return "";

  const allChars = enabledSets.join("");

  const password: string[] = [];

  for (const set of enabledSets) {
    password.push(set[getRandomInt(set.length)]);
  }

  while (password.length < length) {
    password.push(allChars[getRandomInt(allChars.length)]);
  }

  shuffle(password);

  return password.join("");
}
