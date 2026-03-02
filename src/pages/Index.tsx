import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, Star } from "lucide-react";
import { motion } from "framer-motion";
import { formatPrice } from "@/data/products";
import { useProducts, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import ProductsLoading from "@/components/ProductsLoading";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";

const features = [
  { icon: Truck, title: "Bepul yetkazib berish", desc: "100,000 so'mdan ortiq buyurtmalarga" },
  { icon: Shield, title: "Xavfsiz to'lov", desc: "Barcha to'lovlar himoyalangan" },
  { icon: Headphones, title: "24/7 Qo'llab-quvvatlash", desc: "Har doim yordam berishga tayyormiz" },
];

const Index = () => {
  const { products, loading: productsLoading } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();

  const featuredProducts = products.slice(0, 4);
  const saleProducts = products.filter((p) => p.badge === "sale");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container mx-auto flex min-h-[520px] flex-col-reverse items-center gap-8 px-4 py-12 md:flex-row md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary">
              🔥 Maxsus takliflar
            </span>
            <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Eng yaxshi
              <br />
              mahsulotlar —{" "}
              <span className="text-secondary">bir joyda</span>
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/70">
              Minglab sifatli mahsulotlar, ishonchli sotuvchilar va tez yetkazib berish xizmati bilan xarid qilish yanada oson.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <Link
                to="/products"
                className="flex h-12 items-center gap-2 rounded-xl bg-secondary px-8 font-display text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-90"
              >
                Xarid qilish
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/categories"
                className="flex h-12 items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 font-display text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Kategoriyalar
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src={heroBanner}
              alt="Shopping"
              className="mx-auto w-full max-w-lg rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={22} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Kategoriyalar</h2>
              <p className="mt-1 text-sm text-muted-foreground">Kerakli bo'limni tanlang</p>
            </div>
            <Link to="/categories" className="text-sm font-medium text-primary hover:underline">
              Barchasi →
            </Link>
          </div>

          {categoriesLoading ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 animate-pulse">
                  <div className="h-8 w-8 rounded bg-muted" />
                  <div className="h-4 w-16 rounded bg-muted" />
                  <div className="h-3 w-12 rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="font-display text-sm font-semibold text-foreground">{cat.name}</span>
                    <span className="text-xs text-muted-foreground">{cat.count} mahsulot</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Mashhur mahsulotlar</h2>
              <p className="mt-1 text-sm text-muted-foreground">Eng ko'p sotilgan mahsulotlar</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline">
              Barchasi →
            </Link>
          </div>

          {productsLoading ? (
            <ProductsLoading count={4} />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <span className="mb-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  50% gacha chegirma
                </span>
                <h2 className="mb-2 font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Haftalik maxsus takliflar
                </h2>
                <p className="text-primary-foreground/70">
                  Eng yaxshi mahsulotlarga chegirmalar — faqat shu hafta!
                </p>
              </div>
              <Link
                to="/products"
                className="flex h-12 items-center gap-2 rounded-xl bg-secondary px-8 font-display text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-90"
              >
                Ko'rish
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Products */}
      {!productsLoading && saleProducts.length > 0 && (
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground md:text-3xl">
              🏷️ Chegirmadagi mahsulotlar
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {saleProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;
