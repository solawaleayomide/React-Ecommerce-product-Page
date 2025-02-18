import { useState } from "react";
import { data } from "../data";

function ProductSection() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-3">
        <div className="md:h-[25rem] w-full">
          <img
            src={mainImage}
            alt="mainImage"
            className="h-full w-full object-full"
          />
        </div>

        <div className="flex gap-3">
          {products.map((product, i) => {
            return (
              <div key={product.id} onClick={() => setValue(i)}>
                <img src={product.thumbnail} alt="thumbnail-image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
