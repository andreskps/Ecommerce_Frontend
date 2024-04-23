import SectionProduct from "@/components/component/sectionProduct";
import { getProductsBySlug } from "@/lib/api/productsApi";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductsBySlug(slug);

  return <SectionProduct product={product} />;
}
