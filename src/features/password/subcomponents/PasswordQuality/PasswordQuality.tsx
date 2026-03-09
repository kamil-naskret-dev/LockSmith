type PasswordQualityProps = {
  score: 0 | 1 | 2 | 3 | 4;
};

const STRENGTH_COLORS = [
  "bg-transparent",
  "bg-red-500 border-red-500",
  "bg-orange-400 border-orange-400",
  "bg-yellow-400 border-yellow-400",
  "bg-green-400 border-green-400",
];

export const PasswordQuality = ({ score }: PasswordQualityProps) => {
  return (
    <div className="px-4 py-3.5 bg-ds-gray-850 flex items-center justify-between gap-2.5">
      <span className="uppercase text-ds-gray-600 font-bold text-lg">
        Strength
      </span>

      <ul className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => {
          const active = i < score;

          return (
            <li
              key={i}
              className={`w-2.5 h-7 border-2 border-ds-gray-200 ${
                active ? STRENGTH_COLORS[score] : ""
              }`}
              aria-hidden="true"
            >
              &nbsp;
            </li>
          );
        })}
      </ul>
    </div>
  );
};
