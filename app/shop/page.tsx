import React from 'react';
import ShopProduct from '../component/shop-product' // shop-product.tsx ko import karo

function Shoppage() {
  return (
    <div>
      <ShopProduct /> {/* Yahan par ShopProduct component ko render karo */}
    </div>
  );
}

export default Shoppage;