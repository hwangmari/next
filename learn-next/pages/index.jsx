import ProductList from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";

export default function ProductPage() {
  return (
    <div>
      <ProductTitle title="상품목록 페이지" />
      <ProductList />
    </div>
  );
}
