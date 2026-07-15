import type { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export function ProductTable({
  products,
}: Props) {

  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm overflow-x-auto">

      <h2 className="mb-6 text-2xl font-bold">
        Products
      </h2>

      <table className="min-w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">
              Product
            </th>

            <th className="py-3 text-left">
              Price
            </th>

            <th className="py-3 text-left">
              Reviews
            </th>

            <th className="py-3 text-left">
              Shipping
            </th>

            <th className="py-3 text-left">
              Stock
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.url}
              className="border-b last:border-none"
            >

              <td className="py-4">

                <div>

                  <p className="font-semibold">
                    {product.title}
                  </p>

                  <p className="text-sm text-slate-500">
                    {product.url}
                  </p>

                </div>

              </td>

              <td>{product.price}</td>

              <td>
                {product.hasReviews ? "✅" : "❌"}
              </td>

              <td>
                {product.hasShippingInfo ? "✅" : "❌"}
              </td>

              <td>
                {product.inStock ? "✅" : "❌"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}