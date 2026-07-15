// components/layout/Footer.tsx

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Shopify CRO Opportunity Engine
        </p>

        <p className="text-sm text-slate-500">
          Built with Next.js, Playwright & OpenAI
        </p>

      </div>
    </footer>
  );
}