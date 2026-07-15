interface Props {
  score: number;
}

export function ScoreBadge({
  score,
}: Props) {

  const color =
    score >= 85
      ? "bg-green-100 text-green-700"
      : score >= 70
      ? "bg-indigo-100 text-indigo-700"
      : score >= 50
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${color}`}
    >
      {score}
    </span>
  );
}