interface AnalyzeButtonProps {
  loading: boolean;
}

export default function AnalyzeButton({
  loading,
}: AnalyzeButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-lg bg-slate-900 px-6 py-3 text-white font-medium transition hover:bg-slate-800 disabled:opacity-50"
    >
      {loading ? "Analyzing..." : "Analyze Store"}
    </button>
  );
}