import { products } from "@/data/products";
import ProductPageLayout from "@/components/ProductPageLayout";
import type { Metadata } from "next";

const product = products.find((p) => p.id === "groerx")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.description,
  openGraph: {
    title: `${product.name} — ${product.tagline} | AJ's Chalo Seekhen`,
    description: product.description,
  },
};

export default function GroerXPage() {
  return <ProductPageLayout product={product} />;
}
