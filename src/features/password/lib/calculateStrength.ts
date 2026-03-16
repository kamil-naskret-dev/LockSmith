export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

const MIN_LENGTH = 8;
const GOOD_LENGTH = 12;

const LENGTH_POINTS = {
  short: 1,
  long: 2,
} as const;

const MAX_CATEGORY_POINTS = 2;

export function calculateStrength(password: string): PasswordStrength {
  if (!password) return 0;

  let score = 0;

  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const categoryCount = [hasUpper, hasLower, hasNumber, hasSymbol].filter(
    Boolean,
  ).length;

  if (length >= GOOD_LENGTH) score += LENGTH_POINTS.long;
  else if (length >= MIN_LENGTH) score += LENGTH_POINTS.short;

  score += Math.min(categoryCount, MAX_CATEGORY_POINTS);

  return Math.min(score, 4) as PasswordStrength;
}
