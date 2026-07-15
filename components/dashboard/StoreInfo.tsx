import type { StoreData } from "@/lib/scraper/types";

interface Props {
  store: StoreData;
}

export function StoreInfo({
  store,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Store Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <InfoItem
          label="Homepage"
          value={store.homepage.title}
        />

        <InfoItem
          label="Collections"
          value={String(
            store.collections.length
          )}
        />

        <InfoItem
          label="Products"
          value={String(
            store.products.length
          )}
        />

        <InfoItem
          label="Cart"
          value={
            store.cart.hasCheckout
              ? "Available"
              : "Unavailable"
          }
        />

      </div>

    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({
  label,
  value,
}: InfoItemProps) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}