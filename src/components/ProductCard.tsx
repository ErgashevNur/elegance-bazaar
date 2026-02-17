import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-semibold ${
            product.badge === "sale"
              ? "bg-sale text-primary-foreground"
              : "bg-fresh text-primary-foreground"
          }`}
        >
          {product.badge === "sale" ? "Chegirma" : "Yangi"}
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="mb-1 text-xs font-medium text-muted-foreground">{product.seller}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-2 font-display text-sm font-semibold text-card-foreground line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            <Star size={14} className="fill-star text-star" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
