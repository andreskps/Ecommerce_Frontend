"use client";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "../corousel";
import { useState, useEffect } from "react";
import { BackButton } from "./backButton";
import { CartItem, useCartStore } from "@/store/cart-store";
import { currencyFormat } from "@/lib/currencyFormat";
import { Star } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { AddToCartTrigger, viewContent } from "@/services/eventsMeta/eventsMeta";
import { generateEventId } from "@/lib/generateEventId";
interface Image {
  id: number;
  url: string;
}

interface Variant {
  id: number;
  price: number;
  stock: number;
  attribute: string;
  value: string;
}

interface Discount {
  id: number;
  percentage: number;
}

interface Product {
  id: string;
  title: string;
  categoryId: number;
  subCategoryId: number;
  petId: number;
  description: string;
  slug: string;
  isActive: boolean;
  isPopular: boolean;
  isLowStock: boolean;
  variants: Variant[];
  discount: Discount;
  images: Image[];
}

interface Props {
  product: Product;
}

export default function SectionProduct({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const discountPrice =
    product.discount?.percentage === null
      ? 0
      : product.discount?.percentage / 100;
  const addToCart = useCartStore((state) => state.addToCart);
  const { toast } = useToast();

  const [variantSelected, setVariantSelected] = useState<Variant>(
    product.variants[0]
  );

  useEffect(() => {
      viewContent({
        content_name: product.title,
        content_ids: [product.id],
        value: variantSelected.price,
        currency: "COP",
      });
  }, [product]);

  const handleSelectVariant = (variant: Variant) => {
    setVariantSelected(variant);
  };

  const handleAddToCart = () => {
    const unitPrice =
      variantSelected.price - variantSelected.price * discountPrice;
    const totalPrice = unitPrice * quantity;

    const productCart: CartItem = {
      idProduct: product.id,
      slug: product.slug,
      title: product.title,
      quantity: quantity,
      variant: {
        id: variantSelected.id,
        attribute: variantSelected.attribute,
        value: variantSelected.value,
        unitPrice: unitPrice,
      },
      image: product.images[0].url,
    };

    AddToCartTrigger({
      content_name: product.title,
      content_ids: [product.id],
      value: totalPrice,
      currency: "COP",
    });

    addToCart(productCart);

    setQuantity(1);

    toast({
      title: "Producto añadido al carrito",
      description: `${product.title} x ${quantity}`,
      className: "bg-green-500 text-zinc-50",
      duration: 1000,
    });
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-24">
      <BackButton />
      <div className="container w-full flex flex-col md:flex-row items-start gap-8 px-4 md:px-6">
        <CarouselDemo images={product.images} />
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
            {product.title}
          </h1>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {discountPrice > 0
              ? `${currencyFormat(
                  variantSelected.price - variantSelected.price * discountPrice
                )}`
              : `${currencyFormat(variantSelected.price)}`}
          </p>
          {product.discount.percentage !== null && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="line-through text-zinc-500 dark:text-zinc-400">
                {currencyFormat(variantSelected.price)}
              </span>{" "}
              {product.discount.percentage}% de descuento
            </p>
          )}

          <h4 className="font-bold ">Seleccione una presentación</h4>
          <div className="flex space-x-2">
            {product.variants.map((variant) => (
              <Button
                key={variant.id}
                type="button"
                onClick={() => handleSelectVariant(variant)}
                className={`w-auto h-12 rounded-md shadow-sm ${
                  variant.id === variantSelected.id
                    ? "bg-primario hover:bg-primario text-white"
                    : "bg-gray-100 text-zinc-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {variant.value}
              </Button>
            ))}
          </div>
          {/* <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {variantSelected.stock} in stock
          </p> */}
          {product.isLowStock && (
            <p className="text-sm text-red-500 dark:text-red-400">
              ¡Ultimas unidades!
            </p>
          )}

          <div className="mt-2">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Cantidad
            </label>
            <input
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue={quantity.toString()}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full h-12 rounded-md bg-primario text-zinc-50 shadow-sm hover:bg-none"
          >
            Añadir al carrito
          </Button>

          {/* <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Free shipping on orders over $50
          </p> */}
          {/* <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p> */}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tighter">Descripción</h2>
        <p className="text-base text-gray-500 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
          {product.description}
        </p>
      </div>
    </section>
  );
}
