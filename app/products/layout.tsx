import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Catalog",
  description: "Browse our curated inventory of premium organic fruits including Dragon Fruit, Seedless Grapes, and Alpine Mangos. Dispatched via our tech logistics layer across Kathmandu.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
