import React from "react";
// 상품 상세 정보 페이지 컴포넌트
export default ProductDetailPage = ({ message }) => {
  return (
    <div>
      <ProductTitle title="상품상세 정보 페이지" />
      <div>ProductDetailPage :{message}</div>
    </div>
  );
};

export async function getSeverSideProps(context) {
  console.log(context.params.id);
  return {
    props: {
      message: "서버에서 보내준 메시지",
    },
  };
}
