import type { StoreData } from "@/lib/scraper/types";

interface Props {
  store: StoreData;
}

export function EvidencePanel({
  store,
}: Props) {

  const product = store.products[0];

  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Scraped Evidence
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <EvidenceItem
          label="Homepage"
          value={store.homepage.title}
        />

        <EvidenceItem
          label="Hero Heading"
          value={store.homepage.heroHeading}
        />

        <EvidenceItem
          label="Collections"
          value={String(store.collections.length)}
        />

        <EvidenceItem
          label="Products"
          value={String(store.products.length)}
        />

        <EvidenceItem
          label="CTA"
          value={product?.ctaText ?? "-"}
        />

        <EvidenceItem
          label="Price"
          value={product?.price ?? "-"}
        />

      </div>

    </section>
  );
}

interface EvidenceItemProps {
  label: string;
  value: string;
}

function EvidenceItem({
  label,
  value,
}: EvidenceItemProps) {

  return (
    <div className="rounded-xl border bg-slate-50 p-5">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-semibold break-words">
        {value || "-"}
      </p>

    </div>
  );
}