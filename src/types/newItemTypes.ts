export type NewItem = {
  userId: number;
  title: string;
  description: string;
  price: number;
  category:
    | "electronic"
    | "engine"
    | "books"
    | "clothes"
    | "inmobilary"
    | "sport"
    | "House and garden"
    | "other";
  images: string[];
};
