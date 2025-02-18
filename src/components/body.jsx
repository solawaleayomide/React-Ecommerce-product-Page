import DescriptionSection from "./description-section";
import ProductSection from "./product-section";

function Body() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:px-16 md:h-fit">
      <ProductSection />
      <DescriptionSection />
    </div>
  );
}

export default Body;
