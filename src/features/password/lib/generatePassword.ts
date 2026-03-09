const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
};

type Options = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export function generatePassword(options: Options) {
  const { length, ...flags } = options;

  let chars = "";

  Object.entries(flags).forEach(([key, enabled]) => {
    if (enabled) {
      chars += CHAR_SETS[key as keyof typeof CHAR_SETS];
    }
  });

  if (!chars) return "";

  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
}
