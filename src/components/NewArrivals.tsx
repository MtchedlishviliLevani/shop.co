import ProductsSlider from "./ProductsSlider";
import { getisNewArrivalProducts } from "../services/api";
import Button from "../UI/Button";

function NewArrivals() {
    return <div>
        <ProductsSlider title="New Arrivals" fetchProducts={getisNewArrivalProducts} />
        <div className="global-container">
            <div className="mt-[24px] xl:mt-[36px] xl:w-[218px] xl:m-auto"><Button variant="secondary">View All</Button></div>
        </div>
    </div>;
}

export default NewArrivals;
