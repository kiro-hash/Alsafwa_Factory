import p1 from "../assets/products/1.png";
import p2 from "../assets/products/2.png";
import p3 from "../assets/products/3.png";
import p4 from "../assets/products/4.png";
import p5 from "../assets/products/5.png";
import p6 from "../assets/products/6.png";

export interface Product {
  id: number;
  productImg: string;
  productName: string;
  productDesc: string;
}

const products: Product[] = [
  {
    id: 1,
    productImg: p6,
    productName: "Natural Triangle",
    productDesc: "Natural Triangle desc",
  },
  {
    id: 2,
    productImg: p1,
    productName: "Flamenco Triangle",
    productDesc: "Flamenco Triangle desc",
  },
  {
    id: 3,
    productImg: p2,
    productName: "Processed Cheddar",
    productDesc: "Processed Cheddar desc",
  },
  {
    id: 4,
    productImg: p3,
    productName: "Creamy Block",
    productDesc: "Creamy Block desc",
  },
  {
    id: 5,
    productImg: p4,
    productName: "Natural Block",
    productDesc: "Natural Block desc",
  },
  {
    id: 6,
    productImg: p5,
    productName: "Flamenco Cheese",
    productDesc: "Flamenco Cheese desc",
  },
];

export default products;
