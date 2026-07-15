export function LoadingState() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-indigo-600" />

        <p className="mt-4 text-slate-500">
          Analyzing Shopify store...
        </p>
      </div>
    </div>
  );
}