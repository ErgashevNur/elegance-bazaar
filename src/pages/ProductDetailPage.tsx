import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, Minus, Plus, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
          <p className="text-5xl">😕</p>
          <h2 className="mt-4 font-display text-xl font-bold text-foreground">Mahsulot topilmadi</h2>
          <Link to="/products" className="mt-4 text-sm font-medium text-primary hover:underline">
            ← Mahsulotlarga qaytish
          </Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    toast.success(`"${product.name}" (${quantity} dona) savatchaga qo'shildi!`);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} />
          Mahsulotlarga qaytish
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <img src={product.image} alt={product.name} className="h-[400px] w-full object-cover lg:h-[500px]" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {product.badge && (
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  product.badge === "sale"
                    ? "bg-sale text-primary-foreground"
                    : "bg-fresh text-primary-foreground"
                }`}
              >
                {product.badge === "sale" ? "Chegirma" : "Yangi"}
              </span>
            )}

            <h1 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">{product.name}</h1>
            <p className="mb-4 text-sm text-muted-foreground">Sotuvchi: {product.seller}</p>

            {/* Rating */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "fill-star text-star" : "text-muted"}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} sharh)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="font-display text-3xl font-extrabold text-foreground">{formatPrice(product.price)}</p>
              {product.originalPrice && (
                <p className="mt-1 text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</p>
              )}
            </div>

            {/* Description */}
            <p className="mb-6 leading-relaxed text-muted-foreground">{product.description}</p>

            {/* Stock */}
            <p className="mb-6 text-sm">
              <span className={product.stock > 0 ? "text-fresh" : "text-sale"}>
                {product.stock > 0 ? `✓ Mavjud (${product.stock} dona)` : "✗ Tugagan"}
              </span>
            </p>

            {/* Quantity + Add to Cart */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-xl border border-border px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-display font-semibold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl font-display text-sm font-bold text-primary-foreground transition-all duration-300 ${
                  added ? "bg-fresh scale-[1.02]" : "bg-primary hover:opacity-90"
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    Qo'shildi ✓
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Savatchaga qo'shish
                  </>
                )}
              </button>
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-3 rounded-xl border border-border p-4">
              <div className="flex items-center gap-3 text-sm">
                <Truck size={18} className="text-primary" />
                <span className="text-muted-foreground">Bepul yetkazib berish (100,000+ so'm)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield size={18} className="text-primary" />
                <span className="text-muted-foreground">30 kun ichida qaytarish kafolati</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">O'xshash mahsulotlar</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
