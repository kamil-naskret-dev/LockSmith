export const PasswordQuality = () => {
  return (
    <div className="px-4 py-3.5 bg-ds-gray-850 flex items-center justify-between gap-2.5">
      <span className="uppercase text-ds-gray-600 font-bold text-lg">
        Strength
      </span>

      <ul className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            className="w-2.5 h-7 border-2 border-ds-gray-200"
            aria-hidden="true"
          >
            &nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
};
