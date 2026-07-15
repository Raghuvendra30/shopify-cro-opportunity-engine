interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({
  title = "No Analysis Yet",
  message = "Enter a Shopify store URL to begin.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-4 text-slate-500">
          {message}
        </p>
      </div>
    </div>
  );
}