export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: "sale" | "new";
  description: string;
  stock: number;
  seller: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Elektronika", icon: "📱", count: 245 },
  { id: "clothing", name: "Kiyimlar", icon: "👗", count: 532 },
  { id: "home", name: "Uy jihozlari", icon: "🏠", count: 189 },
  { id: "sports", name: "Sport", icon: "⚽", count: 124 },
  { id: "books", name: "Kitoblar", icon: "📚", count: 367 },
  { id: "beauty", name: "Go'zallik", icon: "💄", count: 298 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Simsiz Bluetooth Quloqchin",
    price: 299000,
    originalPrice: 450000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "electronics",
    rating: 4.8,
    reviews: 234,
    badge: "sale",
    description: "Yuqori sifatli simsiz quloqchin, shovqinni yo'qotish funksiyasi bilan. 30 soatgacha batareya ishlash vaqti.",
    stock: 45,
    seller: "TechStore UZ",
  },
  {
    id: "2",
    name: "Zamonaviy Smart Soat",
    price: 890000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "electronics",
    rating: 4.6,
    reviews: 156,
    badge: "new",
    description: "Sport va kundalik hayot uchun ideal smart soat. GPS, yurak urishi monitoringi va 50+ sport rejimi.",
    stock: 23,
    seller: "GadgetWorld",
  },
  {
    id: "3",
    name: "Erkaklar Klassik Ko'ylagi",
    price: 189000,
    originalPrice: 250000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    category: "clothing",
    rating: 4.5,
    reviews: 89,
    badge: "sale",
    description: "100% paxta, yumshoq va qulay klassik erkaklar ko'ylagi. Barcha mavsumlar uchun mos.",
    stock: 120,
    seller: "FashionHub",
  },
  {
    id: "4",
    name: "Oshxona Robot Blender",
    price: 520000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop",
    category: "home",
    rating: 4.7,
    reviews: 312,
    description: "Ko'p funksiyali blender — smoothie, sup, va boshqa taomlar tayyorlash uchun ideal.",
    stock: 67,
    seller: "HomeElite",
  },
  {
    id: "5",
    name: "Yoga Matrasi Premium",
    price: 145000,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=400&fit=crop",
    category: "sports",
    rating: 4.9,
    reviews: 445,
    badge: "new",
    description: "6mm qalinlikdagi premium yoga matrasi. Sirib ketmaydigan yuzasi va qulay tashish sumkasi bilan.",
    stock: 89,
    seller: "SportLife",
  },
  {
    id: "6",
    name: "Ayollar Sumkasi - Charm",
    price: 340000,
    originalPrice: 480000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "clothing",
    rating: 4.4,
    reviews: 178,
    badge: "sale",
    description: "Yuqori sifatli sun'iy teri sumka. Keng ichki bo'lma va elegant dizayn.",
    stock: 34,
    seller: "FashionHub",
  },
  {
    id: "7",
    name: "Dasturlash Asoslari Kitobi",
    price: 85000,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    category: "books",
    rating: 4.8,
    reviews: 523,
    description: "Boshlang'ichlar uchun dasturlash asoslari. Python, JavaScript va boshqa tillar haqida.",
    stock: 200,
    seller: "BookWorld",
  },
  {
    id: "8",
    name: "Yuz parvarishi to'plami",
    price: 275000,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    category: "beauty",
    rating: 4.6,
    reviews: 267,
    badge: "new",
    description: "Tabiiy ingredientlardan tayyorlangan yuz parvarishi to'plami. Krem, tonik va serum.",
    stock: 56,
    seller: "BeautyPro",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("uz-UZ").format(price) + " so'm";
};
