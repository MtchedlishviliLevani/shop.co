import ProductsSlider from "./ProductsSlider";
import { getTopSelllingProducts } from "../services/api";
import Button from "../UI/Button";

function TopSelling() {
    return <div>
        <ProductsSlider title="Top Selling" fetchProducts={getTopSelllingProducts} />
        <div className="global-container">
            <div className="mt-[24px] xl:mt-[36px] xl:w-[218px] xl:m-auto"><Button variant="secondary">View All</Button></div>
        </div>
    </div>;
}

export default TopSelling;
