interface ProgressBarProps {
  value: number;
}

export function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-indigo-600 transition-all duration-700"
        style={{
          width: `${Math.max(
            0,
            Math.min(value, 100)
          )}%`,
        }}
      />
    </div>
  );
}