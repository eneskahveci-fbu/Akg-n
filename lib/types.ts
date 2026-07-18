export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  sahibindenUrl: string;
  type: "Satılık" | "Kiralık";
  category: "Konut" | "Ticari";
  area: string;
  features: Record<string, string>;
}
