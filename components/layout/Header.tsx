// components/layout/Header.tsx

import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-lg bg-slate-900 p-2 text-white">
            <BarChart3 size={18} />
          </div>

          <div>
            <h1 className="text-base font-semibold tracking-tight">
              Shopify CRO
            </h1>

            <p className="text-xs text-slate-500">
              Opportunity Engine
            </p>
          </div>
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm transition hover:bg-slate-100"
          >
            GitHub
          </a>

        </div>

      </div>
    </header>
  );
}