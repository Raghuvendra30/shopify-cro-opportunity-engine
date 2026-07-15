"use client";

import { useState } from "react";

interface UrlFormProps {
  onSubmit?: (url: string) => void;
}

export function UrlForm({
  onSubmit,
}: UrlFormProps) {
  const [url, setUrl] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(url);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4"
    >
      <input
        type="url"
        required
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        placeholder="https://your-store.myshopify.com"
        className="flex-1 rounded-lg border border-slate-300 p-3"
      />

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Analyze
      </button>
    </form>
  );
}