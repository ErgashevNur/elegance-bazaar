import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import Layout from "@/components/Layout";

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Kategoriyalar</h1>
        <p className="mb-8 text-sm text-muted-foreground">Barcha bo'limlarni ko'ring</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="flex items-center gap-5 rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                  {cat.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} mahsulot</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
