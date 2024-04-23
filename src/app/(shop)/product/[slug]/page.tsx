import SectionProduct from "@/components/component/sectionProduct";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/slug/${slug}`, {
    method: "GET",
    cache: "no-cache",
  })

  const product = await response.json();

  console.log(product);


  return (
   <SectionProduct product={product} />
  );
}