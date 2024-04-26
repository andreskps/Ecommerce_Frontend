import SectionProduct from "@/components/component/sectionProduct";
import { getProductsBySlug } from "@/lib/api/productsApi";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch product data
  const product = await getProductsBySlug(slug);

  // return metadata
  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      images: product?.images.map((image: any) => ({
        url: image.url,
      })),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductsBySlug(slug);


  if (!product) {
    return notFound();
  }

  return <SectionProduct product={product} />;
}
